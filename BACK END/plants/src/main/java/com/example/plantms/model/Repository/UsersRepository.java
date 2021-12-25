package com.example.plantms.model.Repository;

import com.example.plantms.model.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository
        extends JpaRepository<Users, Integer> {
}
