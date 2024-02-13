package com.jobvista.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
import com.jobvista.responseDTO.JwtResponeDTO;
import com.jobvista.service.JobSeekerService;
import com.jobvista.utils.JwtUtils;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobseeker")
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;
	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;

	public JobSeekerController() {
		System.out.println("Job Seeker Controller Up and Running!");
	}

	@PostMapping
	private ResponseEntity<?> registerJobSeeker(@RequestBody JobSeekerRequestDTO jobSeekerRequestDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(jobSeekerService.registerJobSeeker(jobSeekerRequestDTO));
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateJobSeeker(@RequestBody JobSeekerCredsRequestDTO credsRequestDTO) {
		Authentication authentication = mgr.authenticate(
				new UsernamePasswordAuthenticationToken(credsRequestDTO.getEmail(), credsRequestDTO.getPassword()));
		String jwtToken = utils.generateJwtToken(authentication);
		return ResponseEntity.status(HttpStatus.OK).body(new JwtResponeDTO(jwtToken));
	}

	@PostMapping("/validate")
	public ResponseEntity<?> validateJobSeeker(@RequestBody JobSeekerCredsRequestDTO credsRequestDTO,
			HttpSession session) {
		JobSeeker jobSeeker = jobSeekerService.validateJobseeker(credsRequestDTO);
		session.setAttribute("loggedInJobSeeker", jobSeeker);
		return ResponseEntity.status(HttpStatus.OK).body("Valid User");
	}

	@DeleteMapping
	public ResponseEntity<?> deleteJobSeeker(@PathVariable Integer id) {
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		jobSeekerService.deleteJobSeeker(jwtParsedUser.getName());
		return ResponseEntity.ok("Deleted!");
	}

}
