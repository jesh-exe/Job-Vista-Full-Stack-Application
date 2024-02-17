package com.jobvista.service;

import java.util.List;

import com.jobvista.requestDTO.JobRequestDTO;
import com.jobvista.responseDTO.ApplicantResponseDTO;
<<<<<<< HEAD
import com.jobvista.responseDTO.JobResponseDTO;

public interface JobService {
	List<JobResponseDTO> getAllJobs();
=======
import com.jobvista.responseDTO.JobListResponseDTO;
import com.jobvista.responseDTO.JobResponseDTO;

public interface JobService {
	List<JobListResponseDTO> getAllJobs();
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
	String createJob(JobRequestDTO jobRequestDTO);
	String deleteJob(String email,Integer id);
	JobResponseDTO getJobDetails(Integer id);
	List<ApplicantResponseDTO> getApplicantsOfJob(String email, Integer id);

}
