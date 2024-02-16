package com.jobvista.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.Recruiter;

public interface RecruiterRepository extends JpaRepository<Recruiter, Integer> {

}
