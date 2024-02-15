package com.jobvista.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobvista.service.JobApplicationService;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/job-application")
public class JobApplicationController {

	@Autowired
	private JobApplicationService jobApplicationService;
	
	
	@GetMapping("/{jobId}")
	public ResponseEntity<?> applyForJob(@PathVariable Integer jobId)
	{
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.CREATED).body(jobApplicationService.applyForJob(jwtParsedUser.getName(),jobId));
	}
	
	@GetMapping("/update/{status}/{jobApplicationId}")
	public ResponseEntity<?> updateJobApplicationStatus(@PathVariable String status, @PathVariable Integer jobApplicationId)
	{
		jobApplicationService.changeStatus(jobApplicationId, status);
		return ResponseEntity.ok("Status Changed");
	}
	@GetMapping("/hire/{applicationId}")
	public ResponseEntity<?> hireJobSeekerEntity (@PathVariable Integer applicationId)
	{	
		jobApplicationService.hireJobSeeker(applicationId);
		return ResponseEntity.ok("Done");
	}
	
}
