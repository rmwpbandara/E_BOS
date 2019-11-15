package EBOS.repositories;

import EBOS.models.OrderModel;
import EBOS.models.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderModel, Integer> {

//    @Query("SELECT u.id FROM UserDTO u where u.email = :email")
//    ProductModel findByEmail(String email);
    //get all users
    //find by id
    //create
    //update
    //delete
    //custom query

    List<OrderModel> findDistinctByOrderProductsIsIn(List<OrderProduct> orderProducts);
}

