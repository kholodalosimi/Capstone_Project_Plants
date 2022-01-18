package com.example.plantms.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;




@Entity
@Table
public class Users {

    @Id
    private int id;
    private String name;
    private int phone;
    private String email;
    private String picture;
    private String username;
    private int password;






//     1>>>>2
    @OneToMany ( mappedBy = "users")
    @JsonIgnore
    private List<Trees> items = new ArrayList<>();





    public Users( int id, String name, int phone, String email, String picture, String username ) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.picture = picture;
        this.username = username;

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

    public List<Trees> getItems() {
        return items;
    }

    public void setItems(List<Trees> items) {
        this.items = items;
    }



}
