package com.example.plantms.controller;

import com.example.plantms.model.Entities.Users;
import com.example.plantms.model.Servicer.UsersService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class UsersControllerTest {
    @Mock
    UsersService usersService;
    @InjectMocks
    UsersController usersController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetUserss() {
        when(usersService.getUsers()).thenReturn(Arrays.<Users>asList(new Users(0, "name", 0, "email", "picture", "username")));

        List<Users> result = usersController.getUserss();
        Assertions.assertEquals(Arrays.<Users>asList(new Users(0, "name", 0, "email", "picture", "username")), result);
    }

    @Test
    void testGetUsers() {
        when(usersService.getUsers(anyInt())).thenReturn(null);

        Optional<Users> result = usersController.getUsers(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewUsers() {
        usersController.registerNewUsers(new Users(0, "name", 0, "email", "picture", "username"));
    }

    @Test
    void testDeleteUsers() {
        usersController.deleteUsers("usersId");
    }

    @Test
    void testCheckLogin() {
        when(usersService.getCheck(anyString(), anyString())).thenReturn("getCheckResponse");

        String result = usersController.checkLogin("username", "password");
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme