package EBOS.controllers;

import EBOS.models.OrderModel;
import EBOS.services.OrderService;
import EBOS.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // identified this is a rest controller
@RequestMapping("/order") //map api url
public class Order {

    @Autowired
    private OrderService orderService;

    @CrossOrigin(origins = "*")
    @GetMapping("/all") // use get request
    public List<OrderModel> allOrders(){
        return orderService.findAllOrders();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public String addOrder(@RequestBody OrderModel orderData){
        return orderService.addOrder(orderData);
    }

    @CrossOrigin(origins = "*")
    @GetMapping ("/find/{id}")
    public Optional <OrderModel> getOrderById(@PathVariable Integer id) {
        return orderService.findById(id);
    }

    @CrossOrigin(origins = "*")
    @PutMapping ("/update")
    public String updateOrder(@RequestBody OrderModel newOrderData) {
        return orderService.updateOrder(newOrderData);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping ("/delete/{id}")
    public String deleteOrder(@PathVariable Integer id) {
        return orderService.deleteOrder(id);
    }
}
