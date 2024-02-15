package com.jobvista.service;

public interface JobApplicationService {

	String applyForJob(String jobSeekerEmail, Integer jobId);

	void hireJobSeeker(Integer jobApplicationId);

	void changeStatus(Integer jobApplicationId, String status);

}
