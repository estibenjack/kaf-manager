package com.estibenjack.kaftrack.repository;

import com.estibenjack.kaftrack.entity.Kaf;
import org.springframework.data.jpa.repository.JpaRepository;

// this interface handles db operations for kaf entities
// it extends JpaRepository so we get built-in CRUD methods (e.g. save, findById, delete)
// <Kaf, String> means: Kaf is the entity type and String is the id type
// *it's empty because we get all the common methods from JpaRepository
public interface KafRepository extends JpaRepository<Kaf, String> {
}
