package com.jobvista.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.jobvista.exception.ApiCustomException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "recruiter_dtls")

public class Recruiter {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rc_id", nullable = false)
	private Integer id;

	@Size(max = 60)
	@Column(name = "rc_first_name", nullable = false, length = 60)
	private String firstName;

	@Size(max = 60)
	@Column(name = "rc_middle_name", length = 60)
	private String middleName;

	@Size(max = 60)
	@Column(name = "rc_last_name", length = 60)
	private String lastName;

	@Size(max = 100)
	@Column(name = "rc_username", nullable = false, length = 100)
	private String username;

	@Size(max = 100)
	@Column(name = "rc_email", nullable = false, length = 100, unique = true)
	private String email;

	@Size(max = 100)
	@Column(name = "rc_password", nullable = false, length = 100)
	private String password;

	@Size(max = 100)
	@Column(name = "rc_company_name", nullable = false, length = 100)
	private String companyName;

	@Size(max = 20)
	@Column(name = "rc_company_contact", nullable = false, length = 20)
	private String companyContact;

	@Lob
	@Column(name = "rc_company_addr", nullable = false, length = 750, columnDefinition = "TEXT")
	private String companyAddr;

	@Size(max = 100)
	@Column(name = "rc_company_url", nullable = false, length = 100, unique = true)
	private String companyUrl;

	@Size(max = 50)
	@Column(name = "rc_company_fax", length = 50)
	private String companyFax;

	@Lob
	@Column(name = "rc_company_logo", length = 1000000, columnDefinition = "MEDIUMBLOB")
	private byte[] companyLogo;

	@Lob
	@Column(name = "rc_company_desc", nullable = false, length = 3500, columnDefinition = "TEXT")
	private String companyDesc;

	@Column(name = "rc_creation_timestamp")
	private LocalDateTime creationTimestamp = LocalDateTime.now();

	@OneToMany(mappedBy = "recruiter",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Job> jobs = new LinkedHashSet<>();

	public void setJob(Job job) {
		job.setRecruiter(this);
		if (!jobs.add(job))
			throw new ApiCustomException("Job Already Exists");
	}
	
	public void deleteJob(Job job)
	{
		if(!jobs.remove(job))
			throw new ApiCustomException("Job Does Not Exist");
		job.setRecruiter(null);
	}

	public List<Job> getJobs() {
		return new ArrayList<Job>(jobs);
	}

	public Recruiter(@Size(max = 60) String firstName, @Size(max = 60) String middleName,
			@Size(max = 60) String lastName, @Size(max = 100) String username, @Size(max = 100) String email,
			@Size(max = 100) String password, @Size(max = 100) String companyName,
			@Size(max = 20) String companyContact, String companyAddr, @Size(max = 100) String companyUrl,
			@Size(max = 50) String companyFax, byte[] companyLogo, String companyDesc) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.companyName = companyName;
		this.companyContact = companyContact;
		this.companyAddr = companyAddr;
		this.companyUrl = companyUrl;
		this.companyFax = companyFax;
		this.companyLogo = companyLogo;
		this.companyDesc = companyDesc;
	}

}