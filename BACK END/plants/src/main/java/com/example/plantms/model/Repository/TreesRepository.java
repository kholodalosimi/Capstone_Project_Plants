package com.example.plantms.model.Repository;


import com.example.plantms.model.Entities.Trees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TreesRepository
    extends JpaRepository<Trees, Integer>{

    }



