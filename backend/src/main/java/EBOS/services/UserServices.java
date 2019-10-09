package EBOS.services;

import EBOS.models.UserModel;

import java.util.List;

public interface UserServices {

    List<UserModel> findAllUsers();

    String saveUser(UserModel userData);
}
