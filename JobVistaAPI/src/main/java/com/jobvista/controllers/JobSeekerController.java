package com.jobvista.controllers;

<<<<<<< HEAD
import java.lang.Thread.State;
=======
import java.util.Base64;
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

<<<<<<< HEAD
=======
import com.jobvista.entities.JobSeeker;
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;
import com.jobvista.responseDTO.JwtResponeDTO;
import com.jobvista.service.JobSeekerService;
import com.jobvista.utils.JwtUtils;

import lombok.extern.slf4j.Slf4j;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobseeker")
@Slf4j
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;
	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;

	public JobSeekerController() {
		log.info("Job Seeker Controller Up and Running!");
	}

	// Register New Job Seeker
	@PostMapping
	private ResponseEntity<?> registerJobSeeker(@RequestBody JobSeekerRequestDTO jobSeekerRequestDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(jobSeekerService.registerJobSeeker(jobSeekerRequestDTO));
	}

	// Save Profile photo and Resume
	@PostMapping(value = "/files/{id}", consumes = "multipart/form-data")
	private ResponseEntity<?> saveFiles(@PathVariable Integer id, @RequestPart("image") MultipartFile image,
			@RequestPart("resume") MultipartFile resume) {
		
		return ResponseEntity.ok(jobSeekerService.saveFiles(id, image, resume));
	}
	
<<<<<<< HEAD
	@PostMapping("/validate")
    public ResponseEntity<?> validateJobSeeker(@RequestBody JobSeekerCredsRequestDTO credsRequestDTO) {
       return ResponseEntity.status(HttpStatus.OK).body(jobSeekerService.validateJobseeker(credsRequestDTO));
    }
	
=======
	@GetMapping("/resume/{email}")
	private ResponseEntity<?> serveResumePDF(@PathVariable String email)
	{
		byte[] resumeBytes = jobSeekerService.getResume(email);
		String encoded = Base64.getEncoder().encodeToString(resumeBytes);
		return ResponseEntity.ok().body(encoded);
	}

	// Login to generate JWT Token
	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateJobSeeker(@RequestBody JobSeekerCredsRequestDTO credsRequestDTO) {
		Authentication authentication = mgr.authenticate(
				new UsernamePasswordAuthenticationToken(credsRequestDTO.getEmail(), credsRequestDTO.getPassword()));
		String jwtToken = utils.generateJwtToken(authentication);
		return ResponseEntity.status(HttpStatus.OK).body(new JwtResponeDTO(jwtToken));
	}


	// Get a Job Seeker by Email extracted from JWT Token
	@GetMapping
	public ResponseEntity<?> getJobSeeker() {
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		JobSeeker jobSeeker = jobSeekerService.getJobseeker(jwtParsedUser.getName());
		return ResponseEntity.status(HttpStatus.OK).body("Valid User");
	}

	// Delete a Job Seeker by Email extracted from JWT Token
	@DeleteMapping
	public ResponseEntity<?> deleteJobSeeker() {
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		jobSeekerService.deleteJobSeeker(jwtParsedUser.getName());
		return ResponseEntity.ok("Deleted!");
	}
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438

}
