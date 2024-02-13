package com.jobvista.service;

import com.jobvista.entities.JobSeeker;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;

public interface JobSeekerService {

	String registerJobSeeker(JobSeekerRequestDTO jobSeekerRequestDTO);
	JobSeeker validateJobseeker(JobSeekerCredsRequestDTO jobSeekerCredsRequestDTO);
	void deleteJobSeeker(String email);

}
