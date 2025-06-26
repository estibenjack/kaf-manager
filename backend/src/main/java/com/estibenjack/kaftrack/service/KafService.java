package com.estibenjack.kaftrack.service;

import com.estibenjack.kaftrack.entity.Kaf;
import com.estibenjack.kaftrack.repository.KafRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// this class is a Service component - holds business logic
@Service
public class KafService {
    private final KafRepository repository;

    // constructor based dependency injection
    // spring injects KafRepository into here
    public KafService(KafRepository repository){
        this.repository=repository;
    }

    // get a list of all kaf records from the db
    public List<Kaf> getAllKafs(){
        return repository.findAll();
    }

    // get a single kaf by its id
    // throws an error if no kaf found with that id
    public Kaf getKafById(String id){
        Optional<Kaf> kaf = repository.findById(id);
        if(kaf.isPresent()){
            return kaf.get();
        } else {
            throw new RuntimeException("Kaf not found with id: "+id);
        }
    }

    // save a new kaf to the db
    public Kaf createKaf(Kaf kaf){
        return repository.save(kaf);
    }

    // update an existing kaf by id with new values
    // first fetches existing kaf, then updates fields and saves again
    public Kaf updateKaf(String id, Kaf updatedKaf){
        Kaf existingKaf = getKafById(id);
        existingKaf.setDateAssigned(updatedKaf.getDateAssigned());
        existingKaf.setArticleTitle(updatedKaf.getArticleTitle());
        existingKaf.setUrl(updatedKaf.getUrl());
        existingKaf.setRequests(updatedKaf.getRequests());
        existingKaf. setStatus(updatedKaf.getStatus());
        return repository.save(existingKaf);
    }

    // delete a kaf by its id
    public void deleteKaf(String id){
        repository.deleteById(id);
    }
}
