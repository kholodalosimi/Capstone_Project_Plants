package com.example.plantms.model.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Treetype {






    @Id
    @Column(name = "treetypeId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int treetypeId;
    private String named;
    private String type;
    private int numberOfPlants;
    private String image;






    //    3>>>>2
    @OneToMany ( mappedBy = "treetype")
    @JsonIgnore
    private List<Trees> items3 = new ArrayList<>();




    public Treetype(int treetypeId, String named, String type, int numberOfPlants, String image) {
        this.treetypeId = treetypeId;
        this.named = named;
        this.type = type;
        this.numberOfPlants = numberOfPlants;
        this.image = image;
    }

    public Treetype() {
    }

    public int getTreetypeId() {
        return treetypeId;
    }



    public void setTreetypeId(int treetypeId) {
        this.treetypeId = treetypeId;
    }



    public String getNamed() {
        return named;
    }



    public void setNamed(String named) {
        this.named = named;
    }



    public String getType() {
        return type;
    }



    public void setType(String type) {
        this.type = type;
    }

    public int getNumberOfPlants() {
        return numberOfPlants;
    }

    public void setNumberOfPlants(int numberOfPlants) {
        this.numberOfPlants = numberOfPlants;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Trees> getItems3() {
        return items3;
    }

    public void setItems3(List<Trees> items3) {
        this.items3 = items3;
    }
}