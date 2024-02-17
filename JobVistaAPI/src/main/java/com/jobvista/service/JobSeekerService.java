package com.jobvista.service;

import com.jobvista.entities.JobSeeker;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;

public interface JobSeekerService {

	String registerJobSeeker(JobSeekerRequestDTO jobSeekerRequestDTO);
	JobSeeker getJobseeker(String email);
	void deleteJobSeeker(String email);

}
