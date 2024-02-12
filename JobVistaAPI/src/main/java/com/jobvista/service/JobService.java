package com.jobvista.service;

import java.util.List;
import java.util.Optional;

import com.jobvista.entities.Job;
import com.jobvista.requestDTO.JobRequestDTO;

public interface JobService {
	List<Job> getAllJobs();
	String createJob(JobRequestDTO jobRequestDTO);
	String deleteJob(Integer id);

}
