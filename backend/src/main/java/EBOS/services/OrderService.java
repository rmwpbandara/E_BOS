package EBOS.services;

import EBOS.models.OrderModel;
import EBOS.models.ProductModel;
import org.aspectj.weaver.ast.Or;

import java.util.List;
import java.util.Optional;

public interface OrderService {


    List<OrderModel> findAllOrders();

    OrderModel addOrder(OrderModel orderData);

    Optional<OrderModel> findById(Integer id);

    String updateOrder(OrderModel newOrderData);

    String deleteOrder(Integer id);

    List<OrderModel> getSellerOrders(Integer seller);
}
