package com.example.plantms.controller;
import com.example.plantms.model.Servicer.TreesService;
import com.example.plantms.model.Entities.Trees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://plant-friend-frontend.herokuapp.com/")

@RestController
@RequestMapping
        (path = "api/trees")
public class TreesController {
    private TreesService treesService;

    @Autowired
    public TreesController(TreesService treesService) {
        this.treesService = treesService;
    }

    @GetMapping
    public List<Trees> getTrees() {
        return treesService.getTrees();
    }


    @PostMapping
            (path = "add")
    public void registerNewTrees(@RequestBody Trees trees){
        treesService.addNewTrees(trees);
    }

    @DeleteMapping
            (path = "delete/{treesId}")
    public void deleteTrees(@PathVariable ("treesId") Integer treesId){
        treesService.deleteTrees(treesId);




    }
}
