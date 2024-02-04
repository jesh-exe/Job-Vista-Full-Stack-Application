package com.jobvista.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.JobApplication;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Integer> {

}
