package EBOS.services;

import EBOS.models.UserModel;

import java.util.List;

public interface UserServices {

    List<UserModel> findAllUsers();

    String registerUser(UserModel userData);
    UserModel loginUser(UserModel userData);

    UserModel updateUser(UserModel userData);

    String getResetLink(String email);
    String resetPassword(String password,String code,String email);

    UserModel getById(Integer id);
}
