package EBOS.models;

import javax.persistence.*;

@Entity
public class Advertiesement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn
    private UserModel addedBy;

    private String title;
    private String image_url;
    private String description;

    public Advertiesement() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public UserModel getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(UserModel addedBy) {
        this.addedBy = addedBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
