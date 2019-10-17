package EBOS.controllers;

import EBOS.models.UserModel;
import EBOS.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return userServices.registerUser(userData);
    }
}
