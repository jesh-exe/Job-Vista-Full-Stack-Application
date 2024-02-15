package com.jobvista.service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.entities.Experience;
import com.jobvista.entities.Job;
import com.jobvista.entities.JobApplication;
import com.jobvista.entities.JobCategory;
import com.jobvista.entities.JobSeeker;
import com.jobvista.entities.Recruiter;
import com.jobvista.exception.ApiCustomException;
import com.jobvista.repositories.JobCategoryRepository;
import com.jobvista.repositories.JobRepository;
import com.jobvista.repositories.RecruiterRepository;
import com.jobvista.requestDTO.JobRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.ExperienceDTO;
import com.jobvista.responseDTO.ApplicantResponseDTO;
import com.jobvista.responseDTO.JobListResponseDTO;
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
	public List<JobListResponseDTO> getAllJobs() {
		List<Job> jobs = jobRepository.findAll();
		List<JobListResponseDTO> jobResponseDTOs = new ArrayList<>();
		for (Job job : jobs) {
			JobResponseDTO jobResponseDTO = mapper.map(job, JobResponseDTO.class);
			jobResponseDTO = helperFillJobResponseDTO(job, jobResponseDTO);
			JobListResponseDTO jobListResponseDTO = mapper.map(jobResponseDTO, JobListResponseDTO.class);
			jobListResponseDTO.setCompanyName(job.getRecruiter().getCompanyName());
			jobListResponseDTO.setCompanyAddress(job.getRecruiter().getCompanyAddr());
			jobListResponseDTO.setCompanyUrl(job.getRecruiter().getCompanyUrl());
			jobListResponseDTO.setApplicantCount(job.getJobApplications().size());
			String postedDate = job.getPostingDate().getDayOfMonth() + " "
					+ job.getPostingDate().getMonth().toString().toLowerCase() + " " + job.getPostingDate().getYear();
			jobListResponseDTO.setPostedDate(postedDate);
			if (job.getRecruiter().getCompanyLogo() != null)
				jobListResponseDTO
						.setCompanyLogo(Base64.getEncoder().encodeToString(job.getRecruiter().getCompanyLogo()));
			jobResponseDTOs.add(jobListResponseDTO);

		}
		return jobResponseDTOs;
	}

	@Override
	public String createJob(JobRequestDTO jobRequestDTO) {
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
	public String deleteJob(String email, Integer id) {
		Job job = jobRepository.findById(id).orElseThrow(() -> new ApiCustomException("Job Does Not Exists!"));
		if (!job.getRecruiter().getEmail().equals(email))
			throw new ApiCustomException("Job Does Not Belong to You!");
		job.getRecruiter().deleteJob(job);
		job.getCategory().deleteJob(job);
		jobRepository.delete(job);
		return "Deleted";
	}

	@Override
	public JobResponseDTO getJobDetails(Integer id) {
		Job job = jobRepository.findById(id).orElseThrow(() -> new ApiCustomException("Job Does Not Exists"));
		JobResponseDTO jobResponseDTO = mapper.map(job, JobResponseDTO.class);

		return helperFillJobResponseDTO(job, jobResponseDTO);
	}

	// Get Applicants for Particular Job
	@Override
	public List<ApplicantResponseDTO> getApplicantsOfJob(String email, Integer id) {
		Job job = jobRepository.findById(id).orElseThrow(() -> new ApiCustomException("Job Does Not Exists"));
		if (!job.getRecruiter().getEmail().equals(email))
			throw new ApiCustomException("UNAUTHORIZED ACCESS");
		List<JobApplication> applications = job.getJobApplications();
		List<ApplicantResponseDTO> applicants = new ArrayList<>();
		for (JobApplication application : applications) {
			JobSeeker applicant = application.getJobSeeker();
			ApplicantResponseDTO applicantDto = mapper.map(applicant, ApplicantResponseDTO.class);

			applicantDto.setJobId(application.getId());
			applicantDto.setCity(applicant.getAddress().getCity());
			applicantDto.setName(applicant.getFirstName() + " " + applicant.getLastName());
			applicantDto.setStatus(application.getStatus());

			// Byte to Base64 String -> Profile Photo
			String base64ProfileImage = "";
			if (applicant.getProfilePhoto() != null)
				base64ProfileImage = Base64.getEncoder().encodeToString(applicant.getProfilePhoto());
			applicantDto.setProfilePhoto(base64ProfileImage);

			// Mapping Experience of JobSeeker to List of Experience DTO
			List<ExperienceDTO> experienceDTOs = new ArrayList<>();
			for (Experience experience : applicant.getExperiences()) {
				ExperienceDTO experienceDTO = mapper.map(experience, ExperienceDTO.class);
				experienceDTOs.add(experienceDTO);
			}
			applicantDto.setExperiences(experienceDTOs);

			applicants.add(applicantDto);
		}
		return applicants;
	}

	// Helper Method to Fill Recruiter Name and Job Categories
	private JobResponseDTO helperFillJobResponseDTO(Job job, JobResponseDTO jobResponseDTO) {
		String recruiterFullName = job.getRecruiter().getFirstName();

		if (job.getRecruiter().getLastName() != "" || job.getRecruiter().getLastName() != null)
			recruiterFullName = recruiterFullName + " " + job.getRecruiter().getLastName();

		jobResponseDTO.setRecruiterName(recruiterFullName);
		jobResponseDTO.setJobCategory(job.getCategory().getName());
		return jobResponseDTO;
	}

}
