package com.jobvista.service;

import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.JobSeeker;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;
import com.jobvista.responseDTO.JobSeekerResponseDTO;

import io.jsonwebtoken.io.IOException;
<<<<<<< HEAD
<<<<<<< HEAD

import io.jsonwebtoken.io.IOException;
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759

public interface JobSeekerService {

	String registerJobSeeker(JobSeekerRequestDTO jobSeekerRequestDTO);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	JobSeeker getJobseeker(String email);
	void deleteJobSeeker(String email);
	String saveFiles(Integer id,MultipartFile image, MultipartFile resume) throws IOException;
	byte[] getResume(String jobSeekerEmail);
=======
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
	JobSeekerResponseDTO getJobseeker(String email);
	void deleteJobSeeker(String email);
	String saveFiles(Integer id,MultipartFile image, MultipartFile resume) throws IOException;
	byte[] getResume(String jobSeekerEmail);
	boolean checkEmail(String email);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759

}
