package com.example.plantms.controller;

import com.example.plantms.model.Entities.Trees;
import com.example.plantms.model.Entities.Treetype;
import com.example.plantms.model.Entities.Users;
import com.example.plantms.model.Servicer.TreesService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class TreesControllerTest {
    @Mock
    TreesService treesService;
    @InjectMocks
    TreesController treesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetTrees() {
        when(treesService.getTrees()).thenReturn(Arrays.<Trees>asList(new Trees(0, "location", "plantingtime", new Users(0, "name", 0, "email", "picture", "username"), new Treetype(0, "named", "type", 0, "image"))));

        List<Trees> result = treesController.getTrees();
        Assertions.assertEquals(Arrays.<Trees>asList(new Trees(0, "location", "plantingtime", new Users(0, "name", 0, "email", "picture", "username"), new Treetype(0, "named", "type", 0, "image"))), result);
    }

    @Test
    void testRegisterNewTrees() {
        treesController.registerNewTrees(new Trees(0, "location", "plantingtime", new Users(0, "name", 0, "email", "picture", "username"), new Treetype(0, "named", "type", 0, "image")));
    }

    @Test
    void testDeleteTrees() {
        treesController.deleteTrees(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme