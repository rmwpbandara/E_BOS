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

//    @CrossOrigin(origins = "*")
//    @GetMapping("/all") // use get request
//    public List<UserModel> allUsers(){
//        return userServices.findAllUsers();
//    }

    @CrossOrigin(origins = "*")
    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userData){
        return userServices.registerUser(userData);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public UserModel loginUser(@RequestBody UserModel userData){
        return userServices.loginUser(userData);
    }


}
