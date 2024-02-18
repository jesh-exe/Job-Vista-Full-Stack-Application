package com.jobvista.service;

<<<<<<< HEAD
=======
import org.springframework.web.multipart.MultipartFile;

>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438
import com.jobvista.entities.JobSeeker;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;

import io.jsonwebtoken.io.IOException;

public interface JobSeekerService {

	String registerJobSeeker(JobSeekerRequestDTO jobSeekerRequestDTO);
<<<<<<< HEAD
	JobSeeker validateJobseeker(JobSeekerCredsRequestDTO jobSeekerCredsRequestDTO);
=======
	JobSeeker getJobseeker(String email);
	void deleteJobSeeker(String email);
	String saveFiles(Integer id,MultipartFile image, MultipartFile resume) throws IOException;
	byte[] getResume(String jobSeekerEmail);
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438

}
