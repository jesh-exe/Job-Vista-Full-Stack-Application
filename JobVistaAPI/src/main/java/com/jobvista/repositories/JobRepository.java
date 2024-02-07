package com.jobvista.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.Job;

public interface JobRepository extends JpaRepository<Job, Integer> {

}
