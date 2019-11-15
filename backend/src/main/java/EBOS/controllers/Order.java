package EBOS.controllers;

import EBOS.models.CommonRequest;
import EBOS.models.OrderModel;
import EBOS.models.OrderProduct;
import EBOS.models.TemporyUser;
import EBOS.repositories.OrderProductRepository;
import EBOS.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController // identified this is a rest controller
@CrossOrigin(origins = "*")
@RequestMapping("/order") //map api url
public class Order {

    @Autowired
    private OrderService orderService;

    @Autowired
    private MailService mailService;

    @Autowired
    private TemporyUserService temporyUserService;

    @Autowired
    private UserServices userServices;

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderProductRepository orderProductRepository;

    @CrossOrigin(origins = "*")
    @GetMapping("/all") // use get request
    public List<OrderModel> allOrders() {
        return orderService.findAllOrders();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/seller/{sid}") // use get request
    public List<OrderModel> sellerOrders(@PathVariable("sid") Integer sid) {
        return orderService.getSellerOrders(sid);
    }

    /*@GetMapping("/seller/{sid}")
    public List<Order>*/

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public OrderModel addOrder(@RequestBody CommonRequest request) {
        StringBuilder body = new StringBuilder("Your order has been placed.\n");
        OrderModel orderModel = new OrderModel();
        orderModel = orderService.addOrder(orderModel);
        orderModel.setOrder_status("Pending");
        TemporyUser user = temporyUserService.addUser(request.getTemporyUser());

        orderModel.setTemporyUser(user);

        Set<OrderProduct> products = request.getProducts();
        for (OrderProduct p : products) {
            p.setOrderModel(orderModel);
            body.append(p.getQuantity())
                    .append(" x ")
                    .append(p.getProductModel().getName())
                    .append(" = ")
                    .append(p.getQuantity() * p.getProductModel().getPrice())
                    .append('\n');
        }
        orderModel.setOrderProducts(products);

        mailService.sendMail(request.getTemporyUser().getEmail(), "E-Bakery Order", body.toString());
        return orderService.addOrder(orderModel);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/find/{id}")
    public Optional<OrderModel> getOrderById(@PathVariable Integer id) {
        return orderService.findById(id);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/update")
    public String updateOrder(@RequestBody OrderModel newOrderData) {
        return orderService.updateOrder(newOrderData);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/delete/{id}")
    public String deleteOrder(@PathVariable Integer id) {
        return orderService.deleteOrder(id);
    }

    @PostMapping("/approve")
    public String approveProducts(@RequestBody OrderModel ree) {
        StringBuilder body = new StringBuilder("Your order for, \n");
        ree.getOrderProducts().forEach(order -> {
            OrderProduct temp = orderProductRepository.findById(order.getId()).get();
            body.append(order.getQuantity())
                    .append(" x ")
                    .append(order.getProductModel().getName())
                    .append(" = ")
                    .append(order.getQuantity() * order.getProductModel().getPrice())
                    .append('\n');
            temp.setApproved(true);
            orderProductRepository.save(temp);
        });
        body.append("HAS BEEN ACCEPTED BY THE SELLER");
        mailService.sendMail(ree.getTemporyUser().getEmail(), "E-Bakery Order: ACCEPTED", body.toString());
        return "DONE";
    }

    @PostMapping("/reject")
    public String rejectProducts(@RequestBody OrderModel ree) {
        StringBuilder body = new StringBuilder("Your order for, \n");
        ree.getOrderProducts().forEach(order -> {
            body.append(order.getQuantity())
                    .append(" x ")
                    .append(order.getProductModel().getName())
                    .append(" = ")
                    .append(order.getQuantity() * order.getProductModel().getPrice())
                    .append('\n');
            orderProductRepository.deleteById(order.getId());
        });
        body.append("HAS BEEN REJECTED BY THE SELLER");
        mailService.sendMail(ree.getTemporyUser().getEmail(), "E-Bakery Order: REJECTED", body.toString());
        return "DONE";
    }
}
