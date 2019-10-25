package EBOS.services;

import EBOS.models.ProductModel;

import java.util.List;

public interface ProductService {

    List<ProductModel> findAllProducts();

    String addProduct(ProductModel userData);
}
