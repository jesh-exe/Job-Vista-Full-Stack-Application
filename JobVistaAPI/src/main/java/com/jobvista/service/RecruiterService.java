package com.jobvista.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.Recruiter;
import com.jobvista.requestDTO.RecruiterRequestDTO;
import com.jobvista.responseDTO.RecruiterResponseDTO;

public interface RecruiterService {
	String addRecruiter(RecruiterRequestDTO recruiterRequestDTO);
	String uploadImage(int id, MultipartFile companyLogo);
	RecruiterResponseDTO getRecruiter(String recruiterEmail);
	void deleteRecruiter(String email);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
	boolean checkEmail(String email);
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
	boolean checkEmail(String email);
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
	boolean checkEmail(String email);
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
}
