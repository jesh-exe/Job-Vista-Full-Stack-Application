package com.jobvista.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.JobSeeker;

public interface JobSeekerRepository extends JpaRepository<JobSeeker, Integer> {

	Optional<JobSeeker> findByEmailAndPassword(String email,String password);
	Optional<JobSeeker> findByEmail(String email);
	boolean existsJobSeekerByEmail(String email);
	boolean existsJobSeekerByUsername(String username);	
}
