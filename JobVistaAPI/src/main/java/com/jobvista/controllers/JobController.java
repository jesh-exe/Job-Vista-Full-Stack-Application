package com.jobvista.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobvista.requestDTO.JobRequestDTO;
import com.jobvista.service.JobService;


//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobs")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	public JobController() {
		System.out.println("Job Controller running");
	}
	
	//Get All Jobs
	@GetMapping
	public ResponseEntity<?> getAllJobs() {
		return ResponseEntity.ok(jobService.getAllJobs());
	}
	
	//Get Job Details for particular ID
	@GetMapping("/job/{id}")
	public ResponseEntity<?> getJobDetails(@PathVariable Integer id)
	{
		System.out.println("In get Job Details");
		return ResponseEntity.status(HttpStatus.OK).body(jobService.getJobDetails(id));
	}
	
	//Get all Applicants for a Job
	@GetMapping("/applicants/{id}")
	public ResponseEntity<?> getJobApplicants(@PathVariable Integer id)
	{
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		
		return ResponseEntity.status(HttpStatus.OK).body(jobService.getApplicantsOfJob(jwtParsedUser.getName(),id));
	}
	
	//Post a Job
	@PostMapping("/job")
	public ResponseEntity<?> createJob(@RequestBody JobRequestDTO jobRequestDTO) {
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		jobRequestDTO.setRecruiterEmail(jwtParsedUser.getName());
		return ResponseEntity.status(HttpStatus.CREATED).body(jobService.createJob(jobRequestDTO));
	}
	
	//Delete a Job
	@DeleteMapping("/job/{id}")
	public ResponseEntity<?> deleteJob(@PathVariable Integer id) {
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(jobService.deleteJob(jwtParsedUser.getName(),id));
	}
	
}
