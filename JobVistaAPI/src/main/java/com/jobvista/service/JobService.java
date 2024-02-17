package com.jobvista.service;

import java.util.List;

import com.jobvista.requestDTO.JobRequestDTO;
import com.jobvista.responseDTO.ApplicantResponseDTO;
import com.jobvista.responseDTO.JobListResponseDTO;
import com.jobvista.responseDTO.JobResponseDTO;

public interface JobService {
	List<JobListResponseDTO> getAllJobs();
	String createJob(JobRequestDTO jobRequestDTO);
	String deleteJob(String email,Integer id);
	JobResponseDTO getJobDetails(Integer id);
	List<ApplicantResponseDTO> getApplicantsOfJob(String email, Integer id);

}
