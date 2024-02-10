package com.jobvista.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
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
@Table(name = "grad_edu_dtls")
public class GraduationEducation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@OneToOne(cascade = CascadeType.ALL,optional = true)
	@JoinColumn(name = "js_id")
	@MapsId
    private JobSeeker jobSeeker;

    @Size(max = 100)
    @Column(name = "grad_college_name", nullable = false, length = 100)
    private String collegeName;

    @Size(max = 150)
    @Column(name = "grad_university_name", nullable = false, length = 150)
    private String universityName;

    @Size(max = 100)    
    @Column(name = "grad_specialization", nullable = false, length = 100)
    private String specialization;

    @Column(name = "grad_duration")
    private Integer duration;
    
    @Column(name = "grad_addmission_year", nullable = false)
    private Integer addmissionYear;
    
    @Column(name = "grad_passing_year", nullable = false)
    private Integer passingYear;
    
    @Column(name = "grad_percentage", nullable = false)
    private Double percentage;
    
    @Column(name = "grad_backlogs", nullable = false)
    private Integer backlogs;
    
    @Column(name = "grad_attempts", nullable = false)
    private Integer attempts;

    @Size(max = 100)    
    @Column(name = "grad_status", nullable = false, length = 100)
    private String status;
    
    @Column(name = "grad_creation_date", nullable = false)
    private LocalDateTime creationDate = LocalDateTime.now();

}