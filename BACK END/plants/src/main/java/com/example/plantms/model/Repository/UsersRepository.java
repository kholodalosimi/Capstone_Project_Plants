package com.example.plantms.model.Repository;

import com.example.plantms.model.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository
        extends JpaRepository<Users, Integer> {

    //    login

    @Query("SELECT password FROM Users WHERE username = :username")
    String findByUsername(@Param("username") String username) ;


    @Query("select case when count(username) > 0 then true else false end from Users where username = :username")
    Boolean existsByUsername(@Param("username") String username);
//
//
//    @Query(value = "SELECT * FROM  Users  where username=:username",nativeQuery = true)
//    Optional<Users> findByUsers(@Param("username") String username) ;




//
//        @Query("SELECT username FROM Users WHERE username = :username AND password = :password ")
//        String findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
//
//
//        @Query(value = "SELECT * FROM Users where username=:username", nativeQuery = true)
//        Optional<Users> findByUsers(@Param("username") String username);
    }