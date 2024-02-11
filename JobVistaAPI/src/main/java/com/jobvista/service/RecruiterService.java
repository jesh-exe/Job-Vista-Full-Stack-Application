package com.jobvista.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.Recruiter;
import com.jobvista.requestDTO.RecruiterRequestDTO;

public interface RecruiterService {
	String addRecruiter(RecruiterRequestDTO recruiterRequestDTO);
	String uploadImage(int id, MultipartFile companyLogo) throws IOException;
	Recruiter validateRecruiter(RecruiterRequestDTO recruiterRequestDTO);
	String deleteRecruiter(Integer id);
}
