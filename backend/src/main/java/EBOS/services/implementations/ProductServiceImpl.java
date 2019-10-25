package EBOS.services.implementations;

import EBOS.models.ProductModel;
import EBOS.repositories.ProductRepository;
import EBOS.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductModel> findAllProducts() {
        // search all products in database and return
        List<ProductModel> allProducts = productRepository.findAll();
        return allProducts;
    }

    @Override
    public String addProduct(ProductModel productData) {
        productRepository.save(productData);
        return "success";
    }
}
