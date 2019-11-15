package EBOS.controllers;

import EBOS.models.Advertiesement;
import EBOS.models.ProductModel;
import EBOS.services.AdvertiesmentService;
import EBOS.services.UserServices;
import EBOS.services.implementations.system.StorageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController // identified this is a rest controller
@CrossOrigin(origins = "*")
@RequestMapping("/advertiesment")
public class AdvertiesmentController {
    @Autowired
    private AdvertiesmentService advertiesmentService;

    @Autowired
    private UserServices userServices;

    @Autowired
    private StorageService storageService;

    @CrossOrigin(origins = "*")
    @PostMapping("/add/{seller}")
    public Advertiesement addProduct(@RequestParam("body") String data,
                             @RequestParam("file") MultipartFile file,
                             @PathVariable("seller") Integer sid){
        storageService.store(file);
        ObjectMapper objectMapper = new ObjectMapper();
        Advertiesement advertiesement;
        try {
            advertiesement = objectMapper.readValue(data, Advertiesement.class);
            advertiesement.setAddedBy(userServices.getById(sid));
            String filePath = "http://localhost:8080/file/"+file.getOriginalFilename();
            advertiesement.setImage_url(filePath);
            System.out.println(filePath + data);
            return advertiesmentService.updateOrSave(advertiesement);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

    }

    @CrossOrigin(origins = "*")
    @GetMapping("/all") // use get request
    public List<Advertiesement> allProducts(){
        return advertiesmentService.random();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/get/{seller}")
    public List<Advertiesement> getProductsBySeller(@PathVariable("seller") Integer sid){
        return advertiesmentService.getBySeller(userServices.getById(sid));
    }

    @CrossOrigin(origins = "*")
    @PostMapping ("/update")
    public Advertiesement updateProduct(@RequestBody Advertiesement newProductData) {
        return advertiesmentService.updateOrSave(newProductData);
    }

    @CrossOrigin(origins = "*")
    @PostMapping ("/delete")
    public Boolean deleteProduct(@RequestBody Advertiesement advertiesment) {
        return advertiesmentService.delete(advertiesment);
    }
}
