package com.estibenjack.kaftrack.controller;

import com.estibenjack.kaftrack.entity.Kaf;
import com.estibenjack.kaftrack.service.KafService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// this class handles HTTP requests for kaf resources
// @RestController means it returns data directly (JSON usually)
// @RquestMapping("/kafs") means all URLS here will start with /kafs
@RestController
@RequestMapping("/kafs")
public class KafController {
    private final KafService kafService;

    // constructor based dependency injection
    // spring calls this and provides a KafService instance automatically
    // this avoids tightly coupling (by KafController NOT creating the KafService itself)
    public KafController(KafService kafService) {
        this.kafService = kafService;
    }

    // this is to GET all kafs
    @GetMapping
    public List<Kaf> getAllKafs(){
        return kafService.getAllKafs();
    }

    // this is to GET a single kaf by its id - handles GET requests to /kafs/{id}
    // {id} is a path variable that gets passed into the parameter as id
    @GetMapping("/{id}")
    public ResponseEntity<Kaf> getKafById(@PathVariable String id){
        Kaf kaf = kafService.getKafById(id);
        if (kaf!=null){
            return ResponseEntity.ok(kaf);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // creates a new kaf entry - handles POST requests to /kafs
    // no extra path here because POST for new entries should be done to /kafs
    // @RequestBody in the parameters tells spring to convert JSON from the request into a KAF obj
    @PostMapping
    public ResponseEntity<Kaf> createKaf(@RequestBody Kaf kaf) {
        Kaf savedKaf = kafService.createKaf(kaf);
        return ResponseEntity.ok(savedKaf);
    }

}
