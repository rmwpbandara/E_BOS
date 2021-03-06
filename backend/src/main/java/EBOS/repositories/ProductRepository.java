package EBOS.repositories;

import EBOS.models.ProductModel;
import EBOS.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductModel, Integer> {

//    @Query("SELECT u.id FROM UserDTO u where u.email = :email")
//    ProductModel findByEmail(String email);
    //get all users
    //find by id
    //create
    //update
    //delete
    //custom query


    List<ProductModel> findAllBySeller(UserModel seller);
}
