package com.jobvista.entities;

import java.time.LocalDate;
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
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job_dtls")
public class Job {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id", nullable = false)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "job_rec_id",nullable = false)
    private Recruiter recruiter;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "job_jc_id", nullable = false)
    private JobCategory category;

    @Size(max = 100)    
    @Column(name = "job_title", nullable = false, length = 100)
    private String title;

    @Size(max = 100)
    @Column(name = "job_exp", length = 100)
    private String experience;

    @Size(max = 100)
    @Column(name = "job_min_edu", nullable = false, length = 100)
    private String minimumEducation;

    @Lob
    @Column(name = "job_desc", nullable = false,length = 8000,columnDefinition = "TEXT")
    private String description;

    @Size(max = 100)
    @Column(name = "job_role", nullable = false, length = 100)
    private String role;

    @Lob
    @Column(name = "job_respo",length = 5000,columnDefinition = "TEXT")
    private String responsiblity;

    @Size(max = 100)
    
    @Column(name = "job_city", nullable = false, length = 100)
    private String jobCity;

    @Column(name = "job_work_hours")
    private Integer workHours;

    @Size(max = 100)
    @Column(name = "job_expected_sal", length = 100)
    private String expectedSalary;

    @Size(max = 50)
    @Column(name = "job_bond", length = 50)
    private String bond;

    @Column(name = "job_vacancy", nullable = false)
    private Integer vacancies;

    @Size(max = 100)
    @Column(name = "job_type", nullable = false, length = 100)
    private String jobType;
    
    @Column(name = "job_post_date", nullable = false)
    private LocalDate postingDate;
    
    @Column(name = "job_views", nullable = false)
    private Integer views;

    @Size(max = 45)
    @Column(name = "job_status", nullable = false, length = 45)
    private String status;
    
    @Column(name = "job_creation_timestamp", nullable = false)
    private LocalDateTime creationTimestamp;
    
    @OneToMany(mappedBy = "job",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<JobApplication> jobApplications = new LinkedHashSet<>();
    
    //Setter and Getter for Job Applications
    public void setJobApplication(JobApplication jobApplication)
    {
    	jobApplication.setJob(this);
    	if(!jobApplications.add(jobApplication))
    		throw new RuntimeException("Job Already exists!");
    }
    public List<JobApplication> getJobApplications(){
    	return new ArrayList<>(jobApplications);
    }
    
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((experience == null) ? 0 : experience.hashCode());
		result = prime * result + ((jobCity == null) ? 0 : jobCity.hashCode());
		return result;
	}

	//Checking if the Job Description, Type and City are same
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof Job))
			return false;
		Job other = (Job) obj;
		if(jobCity.equals(other.jobCity))
			if(jobType.equals(other.jobType))
				if(description.equals(other.description))
					return true;
		
		return false;
	}
    
    


}