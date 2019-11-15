package EBOS;

import EBOS.services.implementations.system.StorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

//define this application is spring boot application
@SpringBootApplication
@EnableConfigurationProperties({
        StorageProperties.class
})
public class Application {

    public static void main(String[] args) {
        //open spring and run all spring applications, ex. start servlet, open tomcat, run spring in the port
        SpringApplication.run(Application.class, args);
    }
}