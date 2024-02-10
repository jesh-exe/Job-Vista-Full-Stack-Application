package com.jobvista.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.repositories.SscEducationRepository;

@Service
@Transactional
public class SscEducationServiceImpl implements SscEducationService {

	@Autowired
	private SscEducationRepository sscEducationRepository;
	
	
}
