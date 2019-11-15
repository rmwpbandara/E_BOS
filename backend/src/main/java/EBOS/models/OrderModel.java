package EBOS.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "orders")
public class OrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String order_status;

    @OneToMany(mappedBy = "orderModel", cascade = CascadeType.ALL)
    private Set<OrderProduct> orderProducts;

    @ManyToOne
    @JoinColumn
    private TemporyUser temporyUser;

    public OrderModel() {
    }

    public Set<OrderProduct> getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(Set<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public TemporyUser getTemporyUser() {
        return temporyUser;
    }

    public void setTemporyUser(TemporyUser temporyUser) {
        this.temporyUser = temporyUser;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }
}

