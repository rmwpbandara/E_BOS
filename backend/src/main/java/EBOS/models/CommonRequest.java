package EBOS.models;

import java.util.List;
import java.util.Set;

public class CommonRequest {
    String password;
    String code;
    String email;
    ProductModel productList;
    int quantity;

    Set<OrderProduct> products;
    TemporyUser temporyUser;

    public ProductModel getProductList() {
        return productList;
    }

    public Set<OrderProduct> getProducts() {
        return products;
    }

    public void setProducts(Set<OrderProduct> products) {
        this.products = products;
    }

    public TemporyUser getTemporyUser() {
        return temporyUser;
    }

    public void setTemporyUser(TemporyUser temporyUser) {
        this.temporyUser = temporyUser;
    }

    public void setProductList(ProductModel productList) {
        this.productList = productList;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public CommonRequest() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
