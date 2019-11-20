package EBOS.services.implementations;

import EBOS.models.UserModel;
import EBOS.repositories.UserRepository;
import EBOS.services.MailService;
import EBOS.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.List;

@Service
public class UserServiceImpl implements UserServices {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MailService mailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<UserModel> findAllUsers() {
        // search all users in database and return
        List<UserModel> allUsers = userRepository.findAll();
        return allUsers;
    }

    @Override
    public String registerUser(UserModel userData) {
        try {
//            String encrypted = passwordEncoder.encode(userData.getPassword());
//            userData.setPassword(encrypted);
            userData.setRandomToken(passwordEncoder.encode(userData.getEmail()));
            String encPass= Base64.getEncoder().encodeToString(userData.getPassword().getBytes());
            userData.setPassword(encPass);
            userRepository.save(userData);
            userData.setPassword(null);
            return "registered";
        } catch (Exception e) {
            System.out.println(e.toString());
            return "error";
        }

    }

    @Override
    public UserModel updateUser(UserModel userData) {
        try {
//            String encrypted = passwordEncoder.encode(userData.getPassword());
//            userData.setPassword(encrypted);
            userData.setRandomToken(passwordEncoder.encode(userData.getEmail()));
            String encPass= Base64.getEncoder().encodeToString(userData.getPassword().getBytes());
            userData.setPassword(encPass);
            userRepository.save(userData);
            userData.setPassword(null);
            return userData;
        } catch (Exception e) {
            System.out.println(e.toString());
            return null;
        }

    }

    @Override
    public String getResetLink(String email) {
        UserModel userModel = userRepository.findByEmail(email);
        if (userModel == null) {
            return "No user found";
        } else {
            mailService.sendMail(
                    email,
                    "E-Bakery Password reset",
                    "Copy and paste following url to reset your password " + userModel.getRandomToken()
            );
            return "Success";
        }
    }

    @Override
    public String resetPassword(String password, String code, String email) {
        UserModel userData = userRepository.findByEmail(email);
        if (userData == null) {
            return "No user found";
        } else if (userData.getRandomToken().equals(code)) {
//            String encrypted = passwordEncoder.encode(password);
            userData.setPassword(password);
            userData.setRandomToken(passwordEncoder.encode(email));
            userRepository.save(userData);

            return "Success";
        } else {
            return "invalid code";
        }
    }

    @Override
    public UserModel loginUser(UserModel userData) {

        String email = userData.getEmail();
        UserModel logUser = userRepository.findByEmail(email);

        String rec = Base64.getEncoder().encodeToString(userData.getPassword().getBytes());
        if(logUser == null){
            return null;
        }
        else if (rec.equals(logUser.getPassword())) {
            UserModel loggedUser = userRepository.findByEmail(email);
            loggedUser.setPassword(null);
            return loggedUser;
        } else {
            return userData;
        }


    }

    @Override
    public UserModel getById(Integer id){
        return userRepository.findById(id).get();
    }
}
