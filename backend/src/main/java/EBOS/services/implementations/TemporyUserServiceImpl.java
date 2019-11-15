package EBOS.services.implementations;


import EBOS.models.TemporyUser;
import EBOS.repositories.TemporyUserRepository;
import EBOS.services.TemporyUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TemporyUserServiceImpl implements TemporyUserService {

    @Autowired
    private TemporyUserRepository temporyUserRepository;

    @Override
    public TemporyUser addUser(TemporyUser u) {
        if (temporyUserRepository.existsByEmail(u.getEmail()))
            return temporyUserRepository.findByEmail(u.getEmail());
        else
            return temporyUserRepository.save(u);
    }
}
