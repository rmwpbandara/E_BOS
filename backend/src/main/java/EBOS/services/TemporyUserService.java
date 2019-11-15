package EBOS.services;

import EBOS.models.TemporyUser;
import org.springframework.stereotype.Service;


public interface TemporyUserService {
    TemporyUser addUser(TemporyUser u);
}
