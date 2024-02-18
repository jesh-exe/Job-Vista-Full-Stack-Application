package com.jobvista.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.JobSeeker;

public interface JobSeekerRepository extends JpaRepository<JobSeeker, Integer> {

	Optional<JobSeeker> findByEmailAndPassword(String email,String password);
<<<<<<< HEAD
=======
	Optional<JobSeeker> findByEmail(String email);
	
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438
	
}
