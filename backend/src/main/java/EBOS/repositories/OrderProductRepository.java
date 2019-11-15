package EBOS.repositories;

import EBOS.models.OrderModel;
import EBOS.models.OrderProduct;
import EBOS.models.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderProductRepository extends CrudRepository<OrderProduct, Integer> {
    List<OrderProduct> findAllByProductModelIsIn(List<ProductModel> productModels);
}
