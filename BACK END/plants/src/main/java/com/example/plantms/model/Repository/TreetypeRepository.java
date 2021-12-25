package com.example.plantms.model.Repository;


import com.example.plantms.model.Entities.Treetype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TreetypeRepository
        extends JpaRepository<Treetype, Integer>{

}