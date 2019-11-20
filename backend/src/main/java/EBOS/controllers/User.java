package EBOS.controllers;

import EBOS.models.CommonRequest;
import EBOS.models.UserModel;
import EBOS.repositories.UserRepository;
import EBOS.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Random;

@RestController // identified this is a rest controller
@RequestMapping("/user") //map api url
public class User {

    @Autowired
    private UserServices userServices;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all") // use get request
    public List<UserModel> allUsers(){
        return userServices.findAllUsers();
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userData){
        return userServices.registerUser(userData);
    }

    @PostMapping("/update")
    public UserModel updateUser(@RequestBody UserModel userModel){
        return userServices.updateUser(userModel);
    }

    @GetMapping("/reset/{email}")
    public String resetLinkRequest(@PathVariable String email){
        return userServices.getResetLink(email);
    }

    @PostMapping
    public String resetPassword(@RequestBody CommonRequest cr){
        return userServices.resetPassword(
                cr.getPassword(),
                cr.getCode(),
                cr.getEmail()
        );
    }

    @PostMapping("/login")
    public UserModel loginUser(@RequestBody UserModel userData){
        return userServices.loginUser(userData);
    }


}
