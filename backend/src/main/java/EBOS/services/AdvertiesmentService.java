package EBOS.services;

import EBOS.models.Advertiesement;
import EBOS.models.UserModel;

import java.util.List;

public interface AdvertiesmentService {

    Advertiesement updateOrSave(Advertiesement advertiesement);

    Boolean delete(Advertiesement advertiesement);

    List<Advertiesement> getBySeller(UserModel seller);

    List<Advertiesement> random();
}
