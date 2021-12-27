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
    private int treetypeId;
    private String named;
    private String type;




    //    3>>>>2
//    @OneToMany(fetch = FetchType.LAZY, mappedBy="treetype")
//    private List<Trees> treess = new ArrayList<Trees>();



    public Treetype (int treetypeId, String named, String type) {
        this.treetypeId = treetypeId;
        this.named = named;
        this.type = type;
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
}