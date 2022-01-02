//package com.example.plantms.controller;
//
//
//
//import com.example.plantms.model.Entities.Treetype;
//import com.example.plantms.model.Servicer.TreetypeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//
//@RestController
//@RequestMapping(path = "api/Treetype")
//public class TreetypeController <treetypeService> {
//
//    private TreetypeService treetypeService;
//
//    @Autowired
//    public TreetypeController(TreetypeService TreetypeService) {
//        this.treetypeService = treetypeService;
//    }
//
//    @GetMapping
//    public List<Treetype> getTreetypes() {
//        return treetypeService.getTreetype();
//    }
//
//
//
//    @GetMapping
//            (path = "{treetypeId}")
//    public Optional<Treetype> getTreetype(@PathVariable(name = "treetypeId") Integer treetypeId) {
//        return treetypeService.getTreetype(treetypeId);
//    }
//
//
//
//    @PostMapping(path = "add")
//    public void registerNewTreetype(@RequestBody Treetype treetype) {
//        treetypeService.addNewTreetype(treetype);
//    }
//
//
//    @DeleteMapping(path = "delete/{treetypeId}")
//    public void deleteTreetype(@PathVariable ("treetypeId") String treetypeId){
//        int ueInt =Integer.parseInt(treetypeId);
//        treetypeService.deleteTreetype(ueInt);
//
//
//    }
//}






package com.example.plantms.controller;


import com.example.plantms.model.Servicer.TreetypeService;
import com.example.plantms.model.Entities.Treetype;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping
        (path = "api/Treetype")
public class TreetypeController {
    private TreetypeService treetypeService;

    @Autowired
    public TreetypeController(TreetypeService treetypeService) {
        this.treetypeService = treetypeService;
    }

    @GetMapping
    public List<Treetype> getTreetype() {
        return treetypeService.getTreetype();
    }

//    @GetMapping
//            (path = "{treetypeId}")
//    public Optional<Treetype> getTreetype(@PathVariable(name = "treetypeId") Integer treetypeId) {
//        return TreetypeService.getTreetype(treetypeId);
//    }


    @PostMapping(path = "add")
    public void registerNewTreetype(@RequestBody Treetype treetype) {
        treetypeService.addNewTreetype(treetype);
    }


    @DeleteMapping
            (path = "delete/{treetypeId}")
    public void deleteTreetype(@PathVariable ("treetypeId") Integer treetypeId){
        treetypeService.deleteTreetype(treetypeId);



    }
}