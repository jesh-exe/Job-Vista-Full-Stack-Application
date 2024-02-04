package com.jobvista.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Integer> {

}
