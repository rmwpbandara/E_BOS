package EBOS.controllers;

import EBOS.models.CommonRequest;
import EBOS.models.UserModel;
import EBOS.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Random;

@RestController // identified this is a rest controller
@RequestMapping("/user") //map api url
public class User {

    @Autowired
    private UserServices userServices;

    @GetMapping("/all") // use get request
    public List<UserModel> allUsers(){
        return userServices.findAllUsers();
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userData){
        byte[] array = new byte[7]; // length is bounded by 7
        new Random().nextBytes(array);
        String generatedString = new String(array, StandardCharsets.UTF_8);
        userData.setRandomToken(generatedString);
        return userServices.registerUser(userData);
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
