package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "grad_edu_dtls")
public class GraduationEducation {
	
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
    private LocalDateTime creationDate;

}