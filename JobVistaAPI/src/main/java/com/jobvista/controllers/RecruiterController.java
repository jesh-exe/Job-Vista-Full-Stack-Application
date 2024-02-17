package com.jobvista.controllers;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jobvista.exception.ApiCustomException;
import com.jobvista.requestDTO.RecruiterRequestDTO;
import com.jobvista.responseDTO.JwtResponeDTO;
import com.jobvista.responseDTO.RecruiterResponseDTO;
import com.jobvista.service.RecruiterService;
import com.jobvista.utils.JwtUtils;

import lombok.extern.slf4j.Slf4j;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/recruiter")
public class RecruiterController {

	@Autowired
	private RecruiterService recruiterService;
	@Autowired
	private AuthenticationManager manager;
	@Autowired
	private JwtUtils utils;
	
	public RecruiterController() {
		
	}

	//Register new Recruiter
	@PostMapping
	public ResponseEntity<?> registerRecruiter(@RequestBody RecruiterRequestDTO recruiterRequestDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(recruiterService.addRecruiter(recruiterRequestDTO));
	}

	//Upload Company Logo
	@PostMapping(value = "/image/{id}", consumes = "multipart/form-data")
	public ResponseEntity<?> saveCompanyLogo(@PathVariable int id,
			@RequestPart("companyLogo") MultipartFile companyLogo) throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(recruiterService.uploadImage(id, companyLogo));
	}

	//Login and create JWT Token if success
	@PostMapping("/authenticate")
	public ResponseEntity<?> signInValidation(@RequestParam("email") String email
			, @RequestParam("password") String password)
	{
		if(!recruiterService.checkEmail(email))
			throw new ApiCustomException("Invalid Credentials");
		Authentication principal = manager
				.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		String jwtToken = utils.generateJwtToken(principal);
		return ResponseEntity.status(HttpStatus.OK).body(new JwtResponeDTO(jwtToken));
	}
	
	//Get a Recruiter by Email extracted from JWT Token
	@GetMapping
	public ResponseEntity<?> getRecruiter() {
		//Parsing the JWT Token to get Email of a Recruiter
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		//GetName() is used to get Information
		RecruiterResponseDTO recruiterResponseDTO = recruiterService.getRecruiter(jwtParsedUser.getName());
		return ResponseEntity.status(HttpStatus.OK).body(recruiterResponseDTO);
	}

	//Delete a Recruiter by Email extracted from JWT Token
	@DeleteMapping
	public ResponseEntity<?> deleteRecruiter() {
		Authentication jwtParsedUser = SecurityContextHolder.getContext().getAuthentication();
		recruiterService.deleteRecruiter(jwtParsedUser.getName());
		return ResponseEntity.ok().body("Deleted");
	}

}
