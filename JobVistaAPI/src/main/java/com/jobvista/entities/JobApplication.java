package com.jobvista.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job_application_dtls")
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ja_id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ja_js_id", nullable = false)
    private JobSeeker jobSeeker;
    
    @ManyToOne
    @JoinColumn(name = "ja_j_id", nullable = false)
    private Job job;

    @Size(max = 45)
    @Column(name = "ja_status", nullable = false, length = 45)
    private String status = "INPROCESS";

    @Column(name = "ja_apply_date", nullable = false)
    private LocalDate applyDate = LocalDate.now();
    
    /*
     * Checking the Job for Job Applications if user applies double for the same job.
     * Contraint -> Job -> jobID
     */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((job == null) ? 0 : job.hashCode());
		return result;
	}

	//Checking if the ID of Job Seeker matches with 
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof JobApplication))
			return false;
		JobApplication other = (JobApplication) obj;
		if (jobSeeker.getId() == null) {
			if (other.jobSeeker.getId() != null)
				return false;
		} else if (!jobSeeker.getId().equals(other.jobSeeker.getId()))
			return false;
		return true;
	}
    
    

}