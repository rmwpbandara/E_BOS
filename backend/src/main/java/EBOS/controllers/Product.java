package EBOS.controllers;

import EBOS.models.ProductModel;
import EBOS.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // identified this is a rest controller
@RequestMapping("/product") //map api url
public class Product {

    @Autowired
    private ProductService productServices;

    @GetMapping("/all") // use get request

    public List<ProductModel> allProducts(){
        return productServices.findAllProducts();
    }

    @PostMapping("/add")
    public String addProduct(@RequestBody ProductModel productData){
        return productServices.addProduct(productData);
    }
}
