package com.example.plantms.model.Servicer;

import com.example.plantms.model.Entities.Users;
import com.example.plantms.model.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {
    private UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public Optional<Users> getUsers(Integer usersId) {
        return usersRepository.findById(usersId);

    }
    //public Optional<Users>getStu
    public void addNewUsers(Users users){
        usersRepository.save(users);
    }
    public void deleteUsers(Integer usersId) {
        usersRepository.deleteById(usersId);

    }


}