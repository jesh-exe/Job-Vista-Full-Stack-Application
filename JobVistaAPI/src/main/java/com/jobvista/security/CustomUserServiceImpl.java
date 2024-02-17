package com.jobvista.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobvista.entities.JobSeeker;
import com.jobvista.entities.Recruiter;
import com.jobvista.exception.ApiCustomException;
import com.jobvista.repositories.JobSeekerRepository;
import com.jobvista.repositories.RecruiterRepository;

@Service
@Transactional
public class CustomUserServiceImpl implements UserDetailsService{
	
	@Autowired
	private JobSeekerRepository jobSeekerRepository;
	@Autowired
	private RecruiterRepository recruiterRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
	{
		Recruiter recruiter = recruiterRepository.findByEmail(email).orElse(null);
		JobSeeker jobseeker = null;
		
		if(recruiter==null)
			jobseeker = jobSeekerRepository.findByEmail(email).orElse(null);
		if(jobseeker == null && recruiter == null)
			throw new ApiCustomException("Invalid Email");
		if(recruiter!=null)
			return new CustomUser(recruiter.getEmail(), passwordEncoder.encode(recruiter.getPassword()), "ROLE_RECRUITER");
		
		return new CustomUser(jobseeker.getEmail(), passwordEncoder.encode(jobseeker.getPassword()), "ROLE_JOBSEEKER");
		
	}
	
	

}
