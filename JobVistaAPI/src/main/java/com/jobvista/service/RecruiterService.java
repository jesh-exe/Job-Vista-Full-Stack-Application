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
	boolean checkEmail(String email);
}
