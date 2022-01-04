package com.example.plantms.model.Repository;

import com.example.plantms.model.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository
        extends JpaRepository<Users, Integer> {

    //    login

    @Query("SELECT password FROM Users WHERE username = :username")
    String findByUsername(@Param("username") String username);

    @Query("select case when count(username) > 0 then true else false end from Users where username = :username")
    Boolean existsByUsername(@Param("username") String username);

}

