package com.example.plantms.model.Servicer;

import com.example.plantms.model.Entities.Treetype;
import com.example.plantms.model.Repository.TreetypeRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class TreetypeServiceTest {
    @Mock
    TreetypeRepository treetypeRepository;
    @InjectMocks
    TreetypeService treetypeService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetTreetype() {
        List<Treetype> result = treetypeService.getTreetype();
        Assertions.assertEquals(Arrays.<Treetype>asList(new Treetype(0, "named", "type", 0, "image")), result);
    }

    @Test
    void testAddNewTreetype() {
        treetypeService.addNewTreetype(new Treetype(0, "named", "type", 0, "image"));
    }

    @Test
    void testDeleteTreetype() {
        treetypeService.deleteTreetype(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme