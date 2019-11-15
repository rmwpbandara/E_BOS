package EBOS.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String location;
    private String contact;
    private String email;

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<ProductModel> productModels;

    @OneToMany(mappedBy = "addedBy", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Advertiesement> advertiesements;

    public Set<Advertiesement> getAdvertiesements() {
        return advertiesements;
    }

    public void setAdvertiesements(Set<Advertiesement> advertiesements) {
        this.advertiesements = advertiesements;
    }

    public Set<ProductModel> getProductModels() {
        return productModels;
    }

    public void setProductModels(Set<ProductModel> productModels) {
        this.productModels = productModels;
    }

    private String password;



    private String account_number;

    private String bank_name;

    private String randomToken;

    public String getAccount_number() {
        return account_number;
    }

    public void setAccount_number(String account_number) {
        this.account_number = account_number;
    }

    public String getBank_name() {
        return bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }


    public UserModel() {
    }

    public String getRandomToken() {
        return randomToken;
    }

    public void setRandomToken(String randomToken) {
        this.randomToken = randomToken;
    }

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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
