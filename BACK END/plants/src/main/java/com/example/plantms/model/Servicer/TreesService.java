package com.example.plantms.model.Servicer;


import com.example.plantms.model.Entities.Trees;
import com.example.plantms.model.Repository.TreesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TreesService {
    private TreesRepository treesRepository;

    @Autowired
    public  TreesService (TreesRepository treesRepository){
        this.treesRepository = treesRepository;

    }


    public  List<Trees> getTrees(){
        return treesRepository.findAll();
    }


    public void addNewTrees(Trees trees){
        treesRepository.save(trees);
    }


    public void deleteTrees(Integer treesId) {
        treesRepository.deleteById(treesId);
    }
}
