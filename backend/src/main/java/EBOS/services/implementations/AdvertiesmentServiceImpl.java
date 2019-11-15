package EBOS.services.implementations;

import EBOS.models.Advertiesement;
import EBOS.models.UserModel;
import EBOS.repositories.AdvertiesmentRepository;
import EBOS.services.AdvertiesmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvertiesmentServiceImpl implements AdvertiesmentService {
    @Autowired
    private AdvertiesmentRepository advertiesmentRepository;

    @Override
    public Advertiesement updateOrSave(Advertiesement advertiesement){
        return advertiesmentRepository.save(advertiesement);
    }

    @Override
    public Boolean delete(Advertiesement advertiesement){
        advertiesmentRepository.delete(advertiesement);
        return true;
    }

    @Override
    public List<Advertiesement> getBySeller(UserModel seller){
        return advertiesmentRepository.findAllByAddedBy(seller);
    }

    @Override
    public List<Advertiesement> random(){
        return advertiesmentRepository.getRandom();
    }
}
