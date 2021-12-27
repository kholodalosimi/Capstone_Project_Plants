package com.example.plantms.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Users {
    @Id
    private int id;
    private String name;
    private int phone;
    private String email;
    private int numberOfPlants;
    private String picture;
    private String username;
    private int password;

    @ManyToOne
    @JoinColumn(name = "trees_id",referencedColumnName = "treesId")
    private Trees trees;




    public Users( int id, String name, int phone, String email, int numberOfPlants, String picture, String username, int password, Trees trees  ) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.numberOfPlants = numberOfPlants;
        this.picture = picture;
        this.username = username;
        this.password = password;
        this.trees = trees;
    }

    public Users() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNumberOfPlants() {
        return numberOfPlants;
    }

    public void setNumberOfPlants(int numberOfPlants) {
        this.numberOfPlants = numberOfPlants;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }



    public Trees getTrees() {
        return trees;
    }

    public void setTrees(Trees trees) {
        this.trees = trees;
    }
}