package com.jobvista.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jobvista.entities.Address;
import com.jobvista.entities.Experience;
import com.jobvista.entities.GraduationEducation;
import com.jobvista.entities.HscEducation;
import com.jobvista.entities.JobSeeker;
import com.jobvista.entities.SscEducation;
import com.jobvista.exception.ApiCustomException;
import com.jobvista.repositories.AddressRepository;
import com.jobvista.repositories.ExperienceRepository;
import com.jobvista.repositories.GraduationEducationRepository;
import com.jobvista.repositories.HscEducationRepository;
import com.jobvista.repositories.JobSeekerRepository;
import com.jobvista.repositories.SscEducationRepository;
<<<<<<< HEAD
import com.jobvista.requestDTO.jobSeekerDTO.ExperienceRequestDTO;
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerCredsRequestDTO;
=======
import com.jobvista.requestDTO.jobSeekerDTO.ExperienceDTO;
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438
import com.jobvista.requestDTO.jobSeekerDTO.JobSeekerRequestDTO;

@Service
@Transactional
public class JobSeekerServiceImpl implements JobSeekerService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private JobSeekerRepository jobSeekerRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private SscEducationRepository sscEducationRepository;
	@Autowired
	private HscEducationRepository hscEducationRepository;
	@Autowired
	private GraduationEducationRepository graduationEducationRepository;
	@Autowired
	private ExperienceRepository experienceRepository;

	public JobSeekerServiceImpl() {
		System.out.println("Job Seeker Service Up and Running!");
	}

	@Override
	public String registerJobSeeker(JobSeekerRequestDTO jobSeekerRequestDTO) {
		// Mapping all the Request Data to Valid Entities
		JobSeeker jobSeeker = mapper.map(jobSeekerRequestDTO.getPersonal(), JobSeeker.class);
		Address address = mapper.map(jobSeekerRequestDTO.getAddress(), Address.class);
		SscEducation sscEducation = mapper.map(jobSeekerRequestDTO.getEducation().getSsc(), SscEducation.class);
		HscEducation hscEducation = mapper.map(jobSeekerRequestDTO.getEducation().getHsc(), HscEducation.class);
		GraduationEducation graduationEducation = mapper.map(jobSeekerRequestDTO.getEducation().getGraduation(),
				GraduationEducation.class);
		// Fetching the List of ExperienceDTO
		List<ExperienceDTO> experienceDTO = jobSeekerRequestDTO.getExperiences();
		List<Experience> experiences = new ArrayList<>();
		// Assigning each item of ExperienceDTO to valid Experience Entity
		for (ExperienceDTO exp : experienceDTO) {
			experiences.add(mapper.map(exp, Experience.class));
		}

		// Setting 2-way Data for automatic ID mapping
		address.setJobSeeker(jobSeeker);
		jobSeeker.setAddress(address);

		sscEducation.setJobSeeker(jobSeeker);
		jobSeeker.setSscEducation(sscEducation);

		hscEducation.setJobSeeker(jobSeeker);
		jobSeeker.setHscEducation(hscEducation);

		graduationEducation.setJobSeeker(jobSeeker);
		jobSeeker.setGraduationEducation(graduationEducation);

<<<<<<< HEAD
=======
		// Setting Experience One by One
>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438
		for (Experience experience : experiences) {
			jobSeeker.setExperience(experience);
		}

		// Persisting the JobSeeker Transient Entity, which will automatically Cascade
		// the Insert of
		// other Entities
		JobSeeker persistedJobSeeker = jobSeekerRepository.save(jobSeeker);
		return persistedJobSeeker.getId().toString();
	}
	
	
<<<<<<< HEAD
	public JobSeeker validateJobseeker(JobSeekerCredsRequestDTO jobSeekerCredsRequestDTO)
	{
		String email = jobSeekerCredsRequestDTO.getEmail();
		String password = jobSeekerCredsRequestDTO.getPassword();
		return jobSeekerRepository.findByEmailAndPassword(email,password).orElseThrow(()->new RuntimeException("Invalid Credentialls!") );
	}
=======
	@Override
	public String saveFiles(Integer id, MultipartFile image, MultipartFile resume) {
		JobSeeker jobSeeker = jobSeekerRepository.findById(id)
				.orElseThrow(() -> new ApiCustomException("User Not Found"));
		try {
			jobSeeker.setProfilePhoto(image.getBytes());
			jobSeeker.setResume(resume.getBytes());
		} catch (IOException e) {
			jobSeekerRepository.delete(jobSeeker);
			throw new ApiCustomException("File Format Not Supported");
		}
		return "Uploaded Data";
	}

	@Override
	public JobSeeker getJobseeker(String email) {
		return jobSeekerRepository.findByEmail(email).orElseThrow(() -> new ApiCustomException("User Not Found!"));
	}

	@Override
	public byte[] getResume(String jobSeekerEmail) {
		JobSeeker jobSeeker = getJobseeker(jobSeekerEmail);
		if(jobSeeker.getResume()==null)
			throw new ApiCustomException("Resume Not Uploaded!");
		return jobSeeker.getResume();
	}
	
	@Override
	public void deleteJobSeeker(String email) {
		JobSeeker jobSeeker = jobSeekerRepository.findByEmail(email)
				.orElseThrow(() -> new ApiCustomException("Recruiter Does Not Exists!"));
		jobSeekerRepository.delete(jobSeeker);
	}


>>>>>>> 0c7acf78bd7bc2b9b2c9362056f8e24564635438

}