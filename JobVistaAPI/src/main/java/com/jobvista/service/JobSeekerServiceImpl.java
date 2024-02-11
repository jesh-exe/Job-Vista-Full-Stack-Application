package com.jobvista.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobvista.entities.Address;
import com.jobvista.entities.Experience;
import com.jobvista.entities.GraduationEducation;
import com.jobvista.entities.HscEducation;
import com.jobvista.entities.JobSeeker;
import com.jobvista.entities.SscEducation;
import com.jobvista.repositories.AddressRepository;
import com.jobvista.repositories.ExperienceRepository;
import com.jobvista.repositories.GraduationEducationRepository;
import com.jobvista.repositories.HscEducationRepository;
import com.jobvista.repositories.JobSeekerRepository;
import com.jobvista.repositories.SscEducationRepository;
import com.jobvista.requestDTO.jobSeekerDTO.ExperienceRequestDTO;
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
		JobSeeker jobSeeker = mapper.map(jobSeekerRequestDTO.getPersonal(), JobSeeker.class);
		Address address = mapper.map(jobSeekerRequestDTO.getAddress(), Address.class);
		SscEducation sscEducation = mapper.map(jobSeekerRequestDTO.getEducation().getSsc(), SscEducation.class);
		HscEducation hscEducation = mapper.map(jobSeekerRequestDTO.getEducation().getHsc(), HscEducation.class);
		GraduationEducation graduationEducation = mapper.map(jobSeekerRequestDTO.getEducation().getGraduation(),
				GraduationEducation.class);
		List<ExperienceRequestDTO> experienceDTO = jobSeekerRequestDTO.getExperiences();
		List<Experience> experiences = new ArrayList<>();
		for (ExperienceRequestDTO exp : experienceDTO) {
			experiences.add(mapper.map(exp, Experience.class));
		}
		address.setJobSeeker(jobSeeker);
		jobSeeker.setAddress(address);

		sscEducation.setJobSeeker(jobSeeker);
		jobSeeker.setSscEducation(sscEducation);

		hscEducation.setJobSeeker(jobSeeker);
		jobSeeker.setHscEducation(hscEducation);

		graduationEducation.setJobSeeker(jobSeeker);
		jobSeeker.setGraduationEducation(graduationEducation);

		for (Experience experience : experiences) {
			jobSeeker.setExperience(experience);
		}
		jobSeekerRepository.save(jobSeeker);
		return "Recieved";
	}

}