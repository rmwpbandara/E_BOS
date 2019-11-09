package EBOS.models;
import javax.persistence.*;


@Entity
@Table(name= "orders")
public class OrderModel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    @Column(name = "id")
    private Integer id;

    @Column(name = "customer_email")
    private String customer_email;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "weight")
    private String weight;

    @Column(name = "order_status")
    private String order_status;

    @Column(name = "seller_notification_view")
    private String seller_notification_view;

    @Column(name = "customer_mail_send")
    private String customer_mail_send;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCustomer_email() {
        return customer_email;
    }

    public void setCustomer_email(String customer_email) {
        this.customer_email = customer_email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Integer getSeller_id() {
        return seller_id;
    }

    public void setSeller_id(Integer seller_id) {
        this.seller_id = seller_id;
    }

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "seller_id")
    private Integer seller_id;


}

