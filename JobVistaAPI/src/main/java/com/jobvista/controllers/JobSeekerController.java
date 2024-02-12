package com.jobvista.controllers;

import java.lang.Thread.State;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobvista.entities.JobSeeker;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;
import com.jobvista.service.JobSeekerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobseeker")
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;

//	@Autowired
//	private AddressService addressService;
//
//	@Autowired
//	private SscEducationService sscEducationService;
//
//	@Autowired
//	private HscEducationService hscEducationService;
//
//	@Autowired
//	private GraduationEducationService graduationEducationService;
//
//	@Autowired
//	private ExperienceService experienceService;

	public JobSeekerController() {
		System.out.println("Job Seeker Controller Up and Running!");
	}

	@PostMapping
	private ResponseEntity<?> registerJobSeeker(@RequestBody JobSeekerRequestDTO jobSeekerRequestDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(jobSeekerService.registerJobSeeker(jobSeekerRequestDTO));
	}

	@PostMapping("/validate")
	public ResponseEntity<?> validateJobSeeker(@RequestBody JobSeekerCredsRequestDTO credsRequestDTO,
			HttpSession session) {
		JobSeeker jobSeeker = jobSeekerService.validateJobseeker(credsRequestDTO);
		session.setAttribute("loggedInJobSeeker", jobSeeker);
		return ResponseEntity.status(HttpStatus.OK).body("Valid User");
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteJobSeeker(@PathVariable Integer id)
	{
		return ResponseEntity.ok(jobSeekerService.deleteJobSeeker(id));
	}

}
