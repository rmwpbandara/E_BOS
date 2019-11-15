package EBOS.repositories;

import EBOS.models.Advertiesement;
import EBOS.models.ProductModel;
import EBOS.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdvertiesmentRepository extends JpaRepository<Advertiesement, Integer> {

//    @Query("SELECT u.id FROM UserDTO u where u.email = :email")
//    ProductModel findByEmail(String email);
    //get all users
    //find by id
    //create
    //update
    //delete
    //custom query


    List<Advertiesement> findAllByAddedBy(UserModel addedBy);

    @Query(nativeQuery=true, value="SELECT *  FROM advertiesement ORDER BY RAND() LIMIT 2")
    List<Advertiesement> getRandom();
}
