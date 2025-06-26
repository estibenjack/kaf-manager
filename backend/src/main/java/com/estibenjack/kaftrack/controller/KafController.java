package com.estibenjack.kaftrack.controller;

import com.estibenjack.kaftrack.entity.Kaf;
import com.estibenjack.kaftrack.service.KafService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/kafs")
public class KafController {
    private final KafService kafService;

    public KafController(KafService kafService) {
        this.kafService = kafService;
    }

    @GetMapping
    public List<Kaf> getAllKafs(){
        return kafService.getAllKafs();
    }

    @PostMapping
    public ResponseEntity<Kaf> createKaf(@RequestBody Kaf kaf) {
        Kaf savedKaf = kafService.createKaf(kaf);
        return ResponseEntity.ok(savedKaf);
    }
}
