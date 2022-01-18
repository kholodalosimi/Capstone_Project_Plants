package com.example.plantms.model.Servicer;

import com.example.plantms.model.Entities.Users;
import com.example.plantms.model.Repository.UsersRepository;
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

class UsersServiceTest {
    @Mock
    UsersRepository usersRepository;
    @InjectMocks
    UsersService usersService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetCheck() {
        when(usersRepository.findByUsername(anyString())).thenReturn("findByUsernameResponse");
        when(usersRepository.existsByUsername(anyString())).thenReturn(Boolean.TRUE);

        String result = usersService.getCheck("username", "password");
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }

    @Test
    void testGetUsers() {
        List<Users> result = usersService.getUsers();
        Assertions.assertEquals(Arrays.<Users>asList(new Users(0, "name", 0, "email", "picture", "username")), result);
    }

    @Test
    void testGetUsers2() {
        Optional<Users> result = usersService.getUsers(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewUsers() {
        usersService.addNewUsers(new Users(0, "name", 0, "email", "picture", "username"));
    }

    @Test
    void testDeleteUsers() {
        usersService.deleteUsers(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme