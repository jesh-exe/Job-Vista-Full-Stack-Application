package com.jobvista.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.entities.Job;
import com.jobvista.repositories.JobRepository;
import com.jobvista.requestDTO.JobRequestDTO;

@Transactional
@Service
public class JobServiceImpl implements JobService {

	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Job> getAllJobs() {
		return jobRepository.findAll();
	}

	@Override
	public Optional<Job> getJobById(Integer id) {
		return jobRepository.findById(id);
	}

	@Override
	public Job createJob(JobRequestDTO jobRequestDTO) {
//		set job fields with the jobRequestDTO fields
		Job job = mapper.map(jobRequestDTO, Job.class);
		return jobRepository.save(job);
	}

	@Override
	public void deleteJob(Integer id) {
		jobRepository.deleteById(id);
	}

}
