package EBOS.repositories;

import EBOS.models.OrderModel;
import EBOS.models.TemporyUser;
import org.springframework.data.repository.CrudRepository;

public interface TemporyUserRepository extends CrudRepository<TemporyUser, Integer> {

    Boolean existsByEmail(String email);

    TemporyUser findByEmail(String email);
}
