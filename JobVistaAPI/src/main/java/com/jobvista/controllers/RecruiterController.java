package com.jobvista.controllers;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.Recruiter;
import com.jobvista.requestDTO.RecruiterRequestDTO;
import com.jobvista.responseDTO.RecruiterResponseDTO;
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
		return ResponseEntity.status(HttpStatus.CREATED).body(recruiterService.addRecruiter(recruiterRequestDTO));
	}

	@PostMapping(value = "/image/{id}")
	public ResponseEntity<?> saveCompanyLogo(@PathVariable int id, @RequestParam("companyLogo") MultipartFile companyLogo) throws IOException {
			return ResponseEntity.status(HttpStatus.CREATED).body(recruiterService.uploadImage(id,companyLogo));			
	}
	
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateRecruiter(@RequestBody RecruiterRequestDTO recruiterRequestDTO, HttpSession session)
	{
		RecruiterResponseDTO recruiterResponseDTO = recruiterService.validateRecruiter(recruiterRequestDTO);
		session.setAttribute("loggedInRecruiter", recruiterResponseDTO);
		return ResponseEntity.status(HttpStatus.OK).body(recruiterResponseDTO);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRecruiter(@PathVariable Integer id)
	{
		return ResponseEntity.status(HttpStatus.OK).body(recruiterService.deleteRecruiter(id));
	}

}
