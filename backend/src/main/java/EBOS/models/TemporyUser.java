package EBOS.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class TemporyUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String email;
    private String phone;

    private String address;
    private String nic;

    @OneToMany(mappedBy = "temporyUser", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<OrderModel> orderModels;

    public TemporyUser() {
    }

    public Set<OrderModel> getOrderModels() {
        return orderModels;
    }

    public void setOrderModels(Set<OrderModel> orderModels) {
        this.orderModels = orderModels;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }
}
