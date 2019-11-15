package EBOS.controllers;

import EBOS.models.ProductModel;
import EBOS.services.ProductService;
import EBOS.services.UserServices;
import EBOS.services.implementations.system.StorageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController // identified this is a rest controller
@CrossOrigin(origins = "*")
@RequestMapping("/product") //map api url
public class Product {

    @Autowired
    private ProductService productServices;

    @Autowired
    private StorageService storageService;

    @Autowired
    private UserServices userServices;

    @CrossOrigin(origins = "*")
    @GetMapping("/all") // use get request
    public List<ProductModel> allProducts(){
        return productServices.findAllProducts();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/get/{seller}")
    public List<ProductModel> getProductsBySeller(@PathVariable("seller") Integer sid){
        return productServices.findBySeller(sid);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/add/{seller}")
    public String addProduct(@RequestParam("body") String data,
                             @RequestParam("file") MultipartFile file,
                             @PathVariable("seller") Integer sid){
        storageService.store(file);
        ObjectMapper objectMapper = new ObjectMapper();
        ProductModel productData;
        try {
            productData = objectMapper.readValue(data, ProductModel.class);
            productData.setSeller(userServices.getById(sid));
            String filePath = "http://localhost:8080/file/"+file.getOriginalFilename();
            productData.setImage_url(filePath);
            System.out.println(filePath + data);
            return productServices.addProduct(productData);
        } catch (IOException e) {
            e.printStackTrace();
            return "error";
        }


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

    @CrossOrigin(origins = "*")
    @DeleteMapping ("/delete/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        return productServices.deleteProduct(id);
    }
}
