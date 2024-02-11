package com.jobvista.service;

import java.util.List;
import java.util.Optional;

import com.jobvista.entities.Job;
import com.jobvista.requestDTO.JobRequestDTO;

public interface JobService {
	public List<Job> getAllJobs();
	public Optional<Job> getJobById(Integer id);
	public Job createJob(JobRequestDTO jobRequestDTO);
	public void deleteJob(Integer id);

}
