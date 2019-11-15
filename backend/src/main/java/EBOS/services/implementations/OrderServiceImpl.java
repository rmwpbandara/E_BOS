package EBOS.services.implementations;

import EBOS.controllers.Order;
import EBOS.models.OrderModel;
import EBOS.models.OrderProduct;
import EBOS.models.ProductModel;
import EBOS.repositories.OrderProductRepository;
import EBOS.repositories.OrderRepository;
import EBOS.services.OrderService;
import EBOS.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderProductRepository orderProductRepository;

    @Autowired
    private ProductService productService;

    @Override
    public List<OrderModel> findAllOrders() {
        // search all orders in database and return
        return orderRepository.findAll();
    }

    @Override
    public OrderModel addOrder(OrderModel orderData) {
        return orderRepository.save(orderData);
    }

    @Override
    public Optional<OrderModel> findById(Integer id) {
        return orderRepository.findById(id);
    }


    @Override
    public String updateOrder(OrderModel newOrderData) {
        String msg = null;
        if (newOrderData.getId() != null) {
            orderRepository.save(newOrderData);
            msg = "Data updated";
        } else {
            msg = "Error";
        }
        return msg;
    }

    @Override
    public String deleteOrder(Integer id) {
        orderRepository.deleteById(id);
        return "success";
    }

    @Override
    public List<OrderModel> getSellerOrders(Integer seller) {
        List<ProductModel> products = productService.findBySeller(seller);
        List<OrderProduct> orderProducts = orderProductRepository.findAllByProductModelIsIn(products);
        List<OrderModel> finalList = orderRepository.findDistinctByOrderProductsIsIn(orderProducts);
        for(OrderModel or : finalList){
            or.getOrderProducts().removeIf(val -> {
               return !products.contains(val.getProductModel());
            });
        }
        return finalList;
    }

}
