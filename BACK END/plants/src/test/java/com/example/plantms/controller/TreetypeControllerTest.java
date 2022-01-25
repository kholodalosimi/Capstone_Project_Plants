package com.example.plantms.controller;

import com.example.plantms.model.Entities.Treetype;
import com.example.plantms.model.Servicer.TreetypeService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class TreetypeControllerTest {
    @Mock
    TreetypeService treetypeService;
    @InjectMocks
    TreetypeController treetypeController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetTreetype() {
        when(treetypeService.getTreetype()).thenReturn(Arrays.<Treetype>asList(new Treetype(0, "named", "type", 0, "image")));

        List<Treetype> result = treetypeController.getTreetype();
        Assertions.assertEquals(Arrays.<Treetype>asList(new Treetype(0, "named", "type", 0, "image")), result);
    }

    @Test
    void testRegisterNewTreetype() {
        treetypeController.registerNewTreetype(new Treetype(0, "named", "type", 0, "image"));
    }

    @Test
    void testDeleteTreetype() {
        treetypeController.deleteTreetype(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme