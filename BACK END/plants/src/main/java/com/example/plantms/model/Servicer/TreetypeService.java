package com.example.plantms.model.Servicer;


import com.example.plantms.model.Entities.Treetype;
import com.example.plantms.model.Repository.TreetypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TreetypeService {
    private TreetypeRepository treetypeRepository;

    @Autowired
    public  TreetypeService (TreetypeRepository treetypeRepository){
        this.treetypeRepository = treetypeRepository;

    }


    public  List<Treetype> getTreetype(){
        return treetypeRepository.findAll();
    }


    public void addNewTreetype(Treetype treetype){
        treetypeRepository.save(treetype);
    }


    public void deleteTreetype(Integer treetypeId) {
        treetypeRepository.deleteById(treetypeId);
    }
}