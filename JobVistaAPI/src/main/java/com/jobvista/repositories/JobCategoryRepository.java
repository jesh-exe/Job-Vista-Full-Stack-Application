package com.jobvista.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.JobCategory;

public interface JobCategoryRepository extends JpaRepository<JobCategory, Integer> {

	Optional<JobCategory> findByName(String name);

}
