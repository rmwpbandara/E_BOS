package EBOS.services.implementations;

import EBOS.models.OrderModel;
import EBOS.repositories.OrderRepository;
import EBOS.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<OrderModel> findAllOrders() {
        // search all orders in database and return
        return orderRepository.findAll();
    }

    @Override
    public String addOrder(OrderModel orderData) {
        orderRepository.save(orderData);
        return "success";
    }

    @Override
    public Optional<OrderModel> findById(Integer id) {
        return orderRepository.findById(id);
    }


    @Override
    public String updateOrder(OrderModel newOrderData) {
        String msg = null;
        if(newOrderData.getId() != null) {
            orderRepository.save(newOrderData);
            msg = "Data updated";
        }else {
            msg = "Error";
        }
        return msg;
    }

    @Override
    public String deleteOrder(Integer id) {
        orderRepository.deleteById(id);
        return "success";
    }

}
