package EBOS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//define this application is spring boot application
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        //open spring and run all spring applications, ex. start servlet, open tomcat, run spring in the port
        SpringApplication.run(Application.class, args);
    }
}