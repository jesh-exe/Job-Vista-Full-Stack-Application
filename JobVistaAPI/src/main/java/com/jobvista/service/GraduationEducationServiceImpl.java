package com.jobvista.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.repositories.GraduationEducationRepository;

@Service
@Transactional
public class GraduationEducationServiceImpl implements GraduationEducationService {
	
	@Autowired
	private GraduationEducationRepository graduationEducationRepository;
	
	
}
