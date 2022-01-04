package com.example.plantms.controller;


import com.example.plantms.model.Entities.Users;
import com.example.plantms.model.Servicer.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/users")
public class UsersController <usersService> {

    private UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping
    public List<Users> getUserss() {
        return usersService.getUsers();
    }



    @GetMapping
            (path = "{usersId}")
    public Optional<Users> getUsers(@PathVariable(name = "usersId") Integer usersId) {
        return usersService.getUsers(usersId);
    }



    @PostMapping(path = "add")
    public void registerNewUsers(@RequestBody Users users) {
        usersService.addNewUsers(users);
    }


                @DeleteMapping(path = "delete/{usersId}")
        public void deleteUsers(@PathVariable ("usersId") String usersId){
            int ueInt =Integer.parseInt(usersId);
                    usersService.deleteUsers(ueInt);


    }


    //  login


    @GetMapping(path = "login")
    public String checkLogin(@RequestParam (name = "username") String username , @RequestParam (name = "password")
            String password ) {
        return usersService.getCheck(username,password);

    }

}