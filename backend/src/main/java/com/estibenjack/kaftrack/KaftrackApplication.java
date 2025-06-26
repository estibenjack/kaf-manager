package com.estibenjack.kaftrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication just marks the entry point of the spring boot application
@SpringBootApplication
public class KaftrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(KaftrackApplication.class, args);
	}

}
