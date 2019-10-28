package EBOS.services;

import EBOS.models.ProductModel;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<ProductModel> findAllProducts();

    String addProduct(ProductModel userData);

    Optional <ProductModel> findById(Integer id);

    String updateProduct(ProductModel newProductData);

}
