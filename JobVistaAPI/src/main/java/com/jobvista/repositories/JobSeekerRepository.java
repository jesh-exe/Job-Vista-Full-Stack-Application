package com.jobvista.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.JobSeeker;

public interface JobSeekerRepository extends JpaRepository<JobSeeker, Integer> {

}
