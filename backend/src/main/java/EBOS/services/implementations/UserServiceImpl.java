package EBOS.services.implementations;

import EBOS.models.UserModel;
import EBOS.repositories.UserRepository;
import EBOS.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserServices {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserModel> findAllUsers() {
        // search all users in database and return
        List<UserModel> allUsers = userRepository.findAll();
        return allUsers;
    }

    @Override
    public String registerUser(UserModel userData) {
        userRepository.save(userData);
        return "registered";
    }
}
