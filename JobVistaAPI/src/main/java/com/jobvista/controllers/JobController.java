package com.jobvista.controllers;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.jobvista.entities.Job;
import com.jobvista.requestDTO.JobRequestDTO;
import com.jobvista.service.JobService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobs")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	public JobController() {
		System.out.println("Job Controller running");
	}
	
	@GetMapping
	public ResponseEntity<List<Job>> getAllJobs() {
		List<Job> jobs = jobService.getAllJobs();
		return ResponseEntity.ok(jobs);
	}
	
//	get job by id
//	@GetMapping("/{id}")
//	public ResponseEntity<Job> getJobById(@PathVariable Integer id) {
//		Optional<Job> job = jobService.getJobById(id);
//		return job.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//	}
	
	@PostMapping("/job")
	public ResponseEntity<?> createJob(@RequestBody JobRequestDTO jobRequestDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(jobService.createJob(jobRequestDTO));
	}
	
	@DeleteMapping("/job/{id}")
	public ResponseEntity<?> deleteJob(@PathVariable Integer id) {
		return ResponseEntity.status(HttpStatus.OK).body(jobService.deleteJob(id));
	}
	
}
