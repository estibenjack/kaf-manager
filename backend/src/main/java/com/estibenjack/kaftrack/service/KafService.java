package com.estibenjack.kaftrack.service;

import com.estibenjack.kaftrack.entity.Kaf;
import com.estibenjack.kaftrack.repository.KafRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KafService {
    private final KafRepository repository;

    public KafService(KafRepository repository){
        this.repository=repository;
    }

    public List<Kaf> getAllKafs(){
        return repository.findAll();
    }

    public Kaf createKaf(Kaf kaf){
        return repository.save(kaf);
    }
}
