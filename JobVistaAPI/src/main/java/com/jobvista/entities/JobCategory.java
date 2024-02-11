package com.jobvista.entities;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job_category")
public class JobCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "jc_id", nullable = false)
	private Integer id;

	// Making name unique, to have no repetition
	// Recruiter would be given the list of roles or option to add new Role
	@Size(max = 255)
	@Column(name = "jc_name", nullable = false, unique = true)
	private String name;

	@Column(name = "jc_creation_timestamp")
	private LocalDateTime creationTimestamp = LocalDateTime.now();

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Job> jobs = new LinkedHashSet<>();

	public void setJob(Job job) {
		job.setCategory(this);
		if (!jobs.add(job))
			throw new ApiCustomException("Job Already Exists");
	}
	
	public void deleteJob(Job job)
	{
		if(!jobs.remove(job))
			throw new ApiCustomException("Job Does Not Exist");
		job.setCategory(null);
	}

}