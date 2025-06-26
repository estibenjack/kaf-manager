package com.estibenjack.kaftrack.repository;

import com.estibenjack.kaftrack.entity.Kaf;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KafRepository extends JpaRepository<Kaf, String> {
}
