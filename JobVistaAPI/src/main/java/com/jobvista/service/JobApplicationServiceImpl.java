package com.jobvista.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.entities.Job;
import com.jobvista.entities.JobApplication;
import com.jobvista.entities.JobSeeker;
import com.jobvista.exception.ApiCustomException;
import com.jobvista.repositories.JobApplicationRepository;
import com.jobvista.repositories.JobRepository;
import com.jobvista.repositories.JobSeekerRepository;

@Service
@Transactional
public class JobApplicationServiceImpl implements JobApplicationService {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private JobApplicationRepository jobApplicationRepository;
	@Autowired
	private JobRepository jobRepository;
	@Autowired
	private JobSeekerRepository jobSeekerRepository;

	@Override
	public String applyForJob(String jobSeekerEmail, Integer jobId) {
		JobSeeker jobSeeker = jobSeekerRepository.findByEmail(jobSeekerEmail)
				.orElseThrow(() -> new ApiCustomException("Recruiter Not Found!"));
		Job job = jobRepository.findById(jobId).orElseThrow(() -> new ApiCustomException("Job Does Not Exists"));
		JobApplication jobApplication = new JobApplication();
		jobSeeker.setJobApplication(jobApplication);
		job.setJobApplication(jobApplication);
		return "Applied";
	}

	@Override
	public void hireJobSeeker(Integer jobApplicationId) {
		JobApplication jobApplication = jobApplicationRepository.findById(jobApplicationId)
				.orElseThrow(()-> new ApiCustomException("Job Application Not Found"));
		if(jobApplication.getStatus().equals("HIRED"))
		{
			throw new ApiCustomException("Already Hired");
		}
		jobApplication.setStatus("HIRED");
	}

	@Override
	public void changeStatus(Integer jobApplicationId, String status) {
		JobApplication jobApplication = jobApplicationRepository.findById(jobApplicationId)
				.orElseThrow(()-> new ApiCustomException("Job Application Not Found"));
		System.out.println(status);
		if(jobApplication.getStatus().equals("HIRED"))
			return;
		jobApplication.setStatus(status);
		
	}

}
