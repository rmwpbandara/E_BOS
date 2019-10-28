package EBOS.services.implementations;

import EBOS.models.ProductModel;
import EBOS.repositories.ProductRepository;
import EBOS.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductModel> findAllProducts() {
        // search all products in database and return
        return productRepository.findAll();
    }

    @Override
    public String addProduct(ProductModel productData) {
        productRepository.save(productData);
        return "success";
    }

    @Override
    public Optional <ProductModel> findById(Integer id) {
        return productRepository.findById(id);
    }


    @Override
    public String updateProduct(ProductModel newProductData) {
        String msg = null;
        if(newProductData.getId() != null) {
            productRepository.save(newProductData);
            msg = "Data updated";
        }else {
            msg = "Error";
        }
        return msg;
    }

}
