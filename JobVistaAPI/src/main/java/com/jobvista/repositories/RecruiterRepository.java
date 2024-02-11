package com.jobvista.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.Recruiter;

public interface RecruiterRepository extends JpaRepository<Recruiter, Integer> {

	Optional<Recruiter> findByEmailAndPassword(String email, String password);
	
}
