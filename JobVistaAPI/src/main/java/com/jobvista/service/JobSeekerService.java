package com.jobvista.service;

import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.JobSeeker;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;
import com.jobvista.responseDTO.JobSeekerResponseDTO;

import io.jsonwebtoken.io.IOException;

public interface JobSeekerService {

	String registerJobSeeker(JobSeekerRequestDTO jobSeekerRequestDTO);
	JobSeekerResponseDTO getJobseeker(String email);
	void deleteJobSeeker(String email);
	String saveFiles(Integer id,MultipartFile image, MultipartFile resume) throws IOException;
	byte[] getResume(String jobSeekerEmail);
	boolean checkEmail(String email);

}
