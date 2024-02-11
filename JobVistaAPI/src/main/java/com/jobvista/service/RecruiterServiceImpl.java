package com.jobvista.service;

import java.io.IOException;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.Recruiter;
import com.jobvista.repositories.RecruiterRepository;
import com.jobvista.requestDTO.RecruiterRequestDTO;

@Service
@Transactional
public class RecruiterServiceImpl implements RecruiterService {

	@Autowired
	private RecruiterRepository recruiterRepository;

	@Autowired
	private ModelMapper mapper;

	public RecruiterServiceImpl() {
		System.out.println("Recruiter Service Up and Running!");
	}

	@Override
	public String addRecruiter(RecruiterRequestDTO recruiterRequestDTO) {
		Recruiter recruiter = mapper.map(recruiterRequestDTO, Recruiter.class);
		recruiter = recruiterRepository.save(recruiter);
		return recruiter.getId().toString();
	}

	@Override
	public String uploadImage(int id, MultipartFile companyLogo) throws IOException {
		Recruiter recruiter = recruiterRepository.findById(id).orElseThrow(() -> new RuntimeException("Failed to Upload Image"));
		recruiter.setCompanyLogo(companyLogo.getBytes());
		return "Uploaded Image";
	}

	
}
