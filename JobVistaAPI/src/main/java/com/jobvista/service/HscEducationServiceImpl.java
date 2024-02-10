package com.jobvista.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.repositories.HscEducationRepository;

@Service
@Transactional
public class HscEducationServiceImpl implements HscEducationService {

	@Autowired
	private HscEducationRepository hscEducationRepository;

}