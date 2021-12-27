package com.example.plantms.model.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.jfr.Enabled;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table
public class Trees {
    @Id
    @Column(name = "treesId")
    private int treesId;
    private String location;
    private String plantingtime;

//   2>>>>1
    @OneToMany(mappedBy = "trees")
    @JsonIgnore
    private List<Users> items = new ArrayList<>();




//    2>>>>3
//
//    @OneToMany(mappedBy = "trees")
//    @JsonIgnore
//    private List<Treetype> treetype = new ArrayList<>();


////    @ManyToOne(fetch = FetchType.LAZY)
////    @JoinColumn(name = "treetypeId")
////    private Treetype treetype;







    public Trees() {
    }

    public Trees(int treesId, String location, String plantingtime, List<Users> items) {
        this.treesId = treesId;
        this.location = location;
        this.plantingtime = plantingtime;
        this.items = items;
    }

    public int getTreesId() {
        return treesId;
    }

    public void setTreesId(int treesId) {
        this.treesId = treesId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPlantingtime() {
        return plantingtime;
    }

    public void setPlantingtime(String plantingtime) {
        this.plantingtime = plantingtime;
    }

    public List<Users> getItems() {
        return items;
    }

    public void setItems(List<Users> items) {
        this.items = items;
    }

}