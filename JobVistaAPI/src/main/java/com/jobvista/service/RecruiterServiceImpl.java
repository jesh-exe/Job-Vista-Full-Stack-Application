package com.jobvista.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.Job;
import com.jobvista.entities.JobApplication;
import com.jobvista.entities.Recruiter;
import com.jobvista.exception.ApiCustomException;
import com.jobvista.repositories.RecruiterRepository;
import com.jobvista.requestDTO.RecruiterRequestDTO;
import com.jobvista.responseDTO.JobResponseDTO;
import com.jobvista.responseDTO.RecruiterResponseDTO;

@Service
@Transactional
public class RecruiterServiceImpl implements RecruiterService {

	@Autowired
	private RecruiterRepository recruiterRepository;

	@Autowired
	private ModelMapper mapper;

	public RecruiterServiceImpl() {
		System.out.println("Recruiter Service Up and Running!");
	}

	// ADD RECRUITER
	@Override
	public String addRecruiter(RecruiterRequestDTO recruiterRequestDTO) {
		Recruiter recruiter = mapper.map(recruiterRequestDTO, Recruiter.class);
		// Checking for Unique Constraint Violations
		if (recruiterRepository.existsRecruiterByEmail(recruiterRequestDTO.getEmail()))
			throw new ApiCustomException("Email ID Already Exists");
		if (recruiterRepository.existsRecruiterByCompanyUrl(recruiterRequestDTO.getCompanyUrl()))
			throw new ApiCustomException("Company URL Already Exists");
		if (recruiterRepository.existsRecruiterByUsername(recruiterRequestDTO.getUsername()))
			throw new ApiCustomException("Username Already Exists");
		recruiter = recruiterRepository.save(recruiter);
		return recruiter.getId().toString();
	}

	// UPLOAD COMPANY LOGO
	@Override
	public String uploadImage(int id, MultipartFile companyLogo){
		Recruiter recruiter = recruiterRepository.findById(id)
				.orElseThrow(() -> new ApiCustomException("User Not Found"));
		try {
			recruiter.setCompanyLogo(companyLogo.getBytes());			
		} catch (IOException e) {
			recruiterRepository.delete(recruiter);
			throw new ApiCustomException("Image Format Not Supported!");
		}
		return "Uploaded Image";
	}

	// LOGIN VALIDATION & RETURNING RECRUITER INFO
	@Override
	public RecruiterResponseDTO getRecruiter(String recruiterEmail) {
		Recruiter recruiter = recruiterRepository.findByEmail(recruiterEmail)
				.orElseThrow(() -> new ApiCustomException("Wrong Credentials!"));
		RecruiterResponseDTO recruiterResponseDTO = mapper.map(recruiter, RecruiterResponseDTO.class);

		int jobApplicants = 0;
		int activeJobs = 0;
		int totalHired = 0;

		// Fetching the list of Jobs to be mapped with JobResponseDTO to be sent to the
		// Recruiter
		List<Job> jobs = recruiter.getJobs();
		List<JobResponseDTO> jobResponseDTOList = new ArrayList<>();
		for (Job job : jobs) {
			// Adding the Size of Job Application List of each job to get the Total
			// application count
			jobApplicants += job.getJobApplications().size();
			
			//Hired Applicants
			for(JobApplication jobApplication : job.getJobApplications())
				if(jobApplication.getStatus().equals("HIRED"))
					++totalHired;
			
			// Job Status -> OPEN or CLOSE
			// To add the cound of Active Jobs(OPEN)
			if (job.getStatus().equals("OPEN"))
				activeJobs++;
			// Mapping the Job Object to the JobResponseDTO
			JobResponseDTO jobResponseDTO = mapper.map(job, JobResponseDTO.class);

			// Creating postedDate from creationDate
			LocalDateTime creationDate = job.getCreationTimestamp();
			String postedDate = creationDate.getDayOfMonth() + " " + creationDate.getMonth().toString().toLowerCase()
					+ " " + creationDate.getYear();
			jobResponseDTO.setPostedDate(postedDate);

			jobResponseDTO.setApplicantCount(job.getJobApplications().size());
			
			// Setting the category of Job in the JobResponseDTO
			jobResponseDTO.setJobCategory(job.getCategory().getName());
			// Adding the Response to the Response List
			jobResponseDTOList.add(jobResponseDTO);
		}

		// Setting the jobResponseDTOList fetched from above loop
		String base64Logo = Base64.getEncoder().encodeToString(recruiter.getCompanyLogo());
		recruiterResponseDTO.setCompanyLogoBase64(base64Logo);
		
		recruiterResponseDTO.setTotalHired(totalHired);
		recruiterResponseDTO.setJobs(jobResponseDTOList);
		recruiterResponseDTO.setTotalApplicants(jobApplicants);
		recruiterResponseDTO.setActiveJobs(activeJobs);
		recruiterResponseDTO.setCompanyDescription(recruiter.getCompanyDesc());
		recruiterResponseDTO.setCompanyAddress(recruiter.getCompanyAddr());
		recruiterResponseDTO.setCompanyContact(recruiter.getCompanyContact());
		return recruiterResponseDTO;
	}

	// DELETE RECRUITER
	@Override
	public void deleteRecruiter(String email) {
		Recruiter recruiter = recruiterRepository.findByEmail(email)
				.orElseThrow(() -> new ApiCustomException("Recruiter Does Not Exists"));
		recruiterRepository.delete(recruiter);
	}

	@Override
	public boolean checkEmail(String email) {
		return recruiterRepository.existsRecruiterByEmail(email);
	}

}
