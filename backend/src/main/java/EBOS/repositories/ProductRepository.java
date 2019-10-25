package EBOS.repositories;

import EBOS.models.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductModel, Integer> {

    //get all users
    //find by id
    //create
    //update
    //delete
    //custom query
}
