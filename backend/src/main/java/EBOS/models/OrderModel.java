package EBOS.models;
import javax.persistence.*;


@Entity
@Table(name= "orders")
public class OrderModel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    @Column(name = "id")
    private Integer id;

    @Column(name = "customer_name")
    private String name;

    @Column(name = "customer_email")
    private String customer_email;

    @Column(name = "customer_address")
    private String customer_address;

    @Column(name = "customer_contact")
    private String customer_contact;

    @Column(name = "order_status")
    private String order_status;

    @Column(name = "seller_notification_view")
    private String seller_notification_view;

    @Column(name = "customer_mail_send")
    private String customer_mail_send;

    @Column(name = "seller_id")
    private Integer seller_id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCustomer_email() {
        return customer_email;
    }

    public void setCustomer_email(String customer_email) {
        this.customer_email = customer_email;
    }

    public String getCustomer_address() {
        return customer_address;
    }

    public void setCustomer_address(String customer_address) {
        this.customer_address = customer_address;
    }

    public String getCustomer_contact() {
        return customer_contact;
    }

    public void setCustomer_contact(String customer_contact) {
        this.customer_contact = customer_contact;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }

    public String getSeller_notification_view() {
        return seller_notification_view;
    }

    public void setSeller_notification_view(String seller_notification_view) {
        this.seller_notification_view = seller_notification_view;
    }

    public String getCustomer_mail_send() {
        return customer_mail_send;
    }

    public void setCustomer_mail_send(String customer_mail_send) {
        this.customer_mail_send = customer_mail_send;
    }

    public Integer getSeller_id() {
        return seller_id;
    }

    public void setSeller_id(Integer seller_id) {
        this.seller_id = seller_id;
    }
}

