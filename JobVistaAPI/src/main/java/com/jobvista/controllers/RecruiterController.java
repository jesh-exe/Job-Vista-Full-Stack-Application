package com.jobvista.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jobvista.requestDTO.RecruiterRequestDTO;
import com.jobvista.service.RecruiterService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/recruiter")
public class RecruiterController {

	@Autowired
	private RecruiterService recruiterService;
	
	public RecruiterController() {
		System.out.println("Recruiter Controller Up and Running!");
	}
	

	@PostMapping
	public ResponseEntity<?> registerRecruiter(@RequestBody RecruiterRequestDTO recruiterRequestDTO) {
		System.out.println("\n\n" + recruiterRequestDTO);
		return ResponseEntity.status(HttpStatus.OK).body(recruiterService.addRecruiter(recruiterRequestDTO));
	}

	@PostMapping(value = "/image/{id}")
	public ResponseEntity<?> saveCompanyLogo(@PathVariable int id, @RequestParam("companyLogo") MultipartFile companyLogo) {
		System.out.println(companyLogo+"\n"+id);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(recruiterService.uploadImage(id,companyLogo));			
		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.OK).body("Failed to Upload Image");
		}
	}
	
	
	//Trupti
	//Validate Recruiter -> validateRecruiter() -> Post Mapping
	

}
