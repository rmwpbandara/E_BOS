package EBOS.repositories;
import EBOS.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.*;

public interface UserRepository extends JpaRepository<UserModel, Integer> {
    //get all users
    //find by id
    //create
    //update
    //delete
    //custom query
}
