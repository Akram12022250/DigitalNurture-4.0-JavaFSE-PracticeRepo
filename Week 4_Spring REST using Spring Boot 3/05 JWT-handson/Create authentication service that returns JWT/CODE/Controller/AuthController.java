package com.example.controller;

import com.example.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;

import java.security.Principal;
import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        if (principal == null) {
            return ResponseEntity.status(401).build();
        }

        String username = principal.getName();
        String token = JwtUtil.generateToken(username);

        return ResponseEntity.ok(Map.of("token", token));
    }
}
