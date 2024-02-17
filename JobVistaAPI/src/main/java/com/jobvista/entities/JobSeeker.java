package com.jobvista.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.jobvista.exception.ApiCustomException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job_seeker_dtls")
public class JobSeeker {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "js_id", nullable = false)
	private Integer id;

	@Size(max = 45)
	@Column(name = "js_first_name", nullable = false, length = 45)
	private String firstName;

	@Size(max = 45)
	@Column(name = "js_middle_name", length = 45)
	private String middleName;

	@Size(max = 45)
	@Column(name = "js_last_name", nullable = false, length = 45)
	private String lastName;

	@Size(max = 45)
	@Column(name = "js_username", nullable = false, length = 45, unique = true)
	private String username;


	@Column(name = "js_password", nullable = false)
	private String password;

	@Size(max = 45)
	@Column(name = "js_email", nullable = false, length = 45, unique = true)
	private String email;

	@Size(max = 10)
	@Column(name = "js_contact_number", nullable = false, length = 10)
	private String contactNumber;

	@Lob
	@Column(name = "js_profile_photo", length = 500000, columnDefinition = "MEDIUMBLOB")
	private byte[] profilePhoto;

	@Size(max = 30)
	@Column(name = "js_gender", nullable = false, length = 30)
	private String gender;

	@Lob
	@Basic(fetch = FetchType.LAZY)
	@Column(name = "js_resume", length = 1000000, columnDefinition = "MEDIUMBLOB")
	private byte[] resume;

	@Size(max = 255)
	@Column(name = "js_portfolio_link")
	private String portfolioLink;

	@Size(max = 255)
	@Column(name = "js_git_repo_link")
	private String githubRepositoryLink;

	@Lob
	@Column(name = "js_skills", nullable = false, length = 3500, columnDefinition = "TEXT")
	private String skills;

	@Column(name = "js_login_timestamp")
	private LocalDateTime loginTimestamp;

	@Column(name = "js_creation_date", nullable = false)
	private LocalDateTime creationDate = LocalDateTime.now();

	@OneToOne(mappedBy = "jobSeeker", cascade = CascadeType.ALL, orphanRemoval = true)
	private Address address;

	@OneToOne(mappedBy = "jobSeeker", cascade = CascadeType.ALL, orphanRemoval = true)
	private SscEducation sscEducation;

	@OneToOne(mappedBy = "jobSeeker", cascade = CascadeType.ALL, orphanRemoval = true)
	private HscEducation hscEducation;

	@OneToOne(mappedBy = "jobSeeker", cascade = CascadeType.ALL, orphanRemoval = true)
	private GraduationEducation graduationEducation;

	@OneToMany(mappedBy = "jobSeeker", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Experience> experiences = new LinkedHashSet<>();

	@OneToMany(mappedBy = "jobSeeker", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<JobApplication> jobApplications = new LinkedHashSet<>();

	// Setter & Getter for Experiences
	public void setExperience(Experience experience) {
		experience.setJobSeeker(this);
		if (!experiences.add(experience))
			throw new ApiCustomException("Experience Already Added!");
	}

	public List<Experience> getExperiences() {
		return new ArrayList<Experience>(experiences);
	}

	// Setter & Getter for JobApplications
	public void setJobApplication(JobApplication jobApplication) {
		jobApplication.setJobSeeker(this);
		System.out.println("In Job Seeker");
		if (!jobApplications.add(jobApplication))
			throw new ApiCustomException("Job Application Already Exists");
	}

	public List<JobApplication> getJobApplications() {
		return new ArrayList<JobApplication>(jobApplications);
	}

}