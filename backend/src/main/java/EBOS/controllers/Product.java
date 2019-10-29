package EBOS.controllers;

import EBOS.models.ProductModel;
import EBOS.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // identified this is a rest controller
@RequestMapping("/product") //map api url
public class Product {

    @Autowired
    private ProductService productServices;

    @CrossOrigin(origins = "*")
    @GetMapping("/all") // use get request
    public List<ProductModel> allProducts(){
        return productServices.findAllProducts();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public String addProduct(@RequestBody ProductModel productData){
        return productServices.addProduct(productData);
    }

    @CrossOrigin(origins = "*")
    @GetMapping ("/find/{id}")
    public Optional <ProductModel> getProductById(@PathVariable Integer id) {
        return productServices.findById(id);
    }

    @CrossOrigin(origins = "*")
    @PutMapping ("/update")
    public String updateProduct(@RequestBody ProductModel newProductData) {
        return productServices.updateProduct(newProductData);
    }
}
