package EBOS.repositories;

import EBOS.models.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<ProductModel, Integer> {

    @Query("SELECT u.id FROM UserDTO u where u.email = :email")
    ProductModel findByEmail(String email);
    //get all users
    //find by id
    //create
    //update
    //delete
    //custom query
}
