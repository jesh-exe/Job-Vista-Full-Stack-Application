package com.jobvista.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.entities.Job;
import com.jobvista.entities.JobCategory;
import com.jobvista.entities.Recruiter;
import com.jobvista.exception.ApiCustomException;
import com.jobvista.exception.ApiExceptionHandler;
import com.jobvista.repositories.JobCategoryRepository;
import com.jobvista.repositories.JobRepository;
import com.jobvista.repositories.RecruiterRepository;
import com.jobvista.requestDTO.JobRequestDTO;
import com.jobvista.responseDTO.JobResponseDTO;

@Transactional
@Service
public class JobServiceImpl implements JobService {

	@Autowired
	private JobRepository jobRepository;
	@Autowired
	private RecruiterRepository recruiterRepository;
	@Autowired
	private JobCategoryRepository jobCategoryRepository;
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<Job> getAllJobs() {
		return jobRepository.findAll();
	}

	@Override
	public String createJob(JobRequestDTO jobRequestDTO) {
//		set job fields with the jobRequestDTO fields
		Recruiter recruiter = recruiterRepository.findByEmail(jobRequestDTO.getRecruiterEmail())
				.orElseThrow(() -> new ApiCustomException("Email Not Found!"));
		JobCategory jobCategory = jobCategoryRepository.findByName(jobRequestDTO.getJobCategory())
				.orElseThrow(() -> new ApiCustomException("Job Category Not Found!"));
		Job job = mapper.map(jobRequestDTO, Job.class);

		recruiter.setJob(job);
		jobCategory.setJob(job);

		job.setCategory(jobCategory);
		job.setRecruiter(recruiter);

		jobRepository.save(job);

		return "Job Created";

	}

	@Override
	public String deleteJob(Integer id) {
		Job job = jobRepository.findById(id).orElseThrow(() -> new ApiCustomException("Job Does Not Exists!"));
		job.getRecruiter().deleteJob(job);
		job.getCategory().deleteJob(job);
		jobRepository.delete(job);
		return "Deleted";
	}

	@Override
	public JobResponseDTO getJobDetails(Integer id) {
		Job job = jobRepository.findById(id).orElseThrow(()->new ApiCustomException("Job Does Not Exists"));
		JobResponseDTO jobResponseDTO = mapper.map(job, JobResponseDTO.class);
		
		String recruiterFullName = job.getRecruiter().getFirstName();
		if(job.getRecruiter().getLastName()!="" || job.getRecruiter().getLastName()!=null)
			recruiterFullName = recruiterFullName + " " + job.getRecruiter().getLastName();
		
		jobResponseDTO.setRecruiterName(recruiterFullName);
		jobResponseDTO.setJobCategory(job.getCategory().getName());
		
		return jobResponseDTO;
	}

}
