package com.jobvista.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.jobvista.entities.Recruiter;
import com.jobvista.repositories.RecruiterRepository;
import com.jobvista.requestDTO.RecruiterRequestDTO;

public class RecruiterServiceImpl implements RecruiterService{

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
		return "Added Successfully!";
	}
	
	
}
