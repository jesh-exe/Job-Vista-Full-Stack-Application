package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "job_dtls")
public class Job {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "job_rec_id")
    private Recruiter recruiter;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
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
    @Column(name = "job_desc", nullable = false)
    private String description;

    @Size(max = 100)
    @Column(name = "job_role", nullable = false, length = 100)
    private String role;

    @Lob
    @Column(name = "job_respo")
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

    @OneToMany(mappedBy = "jaJ")
    private Set<JobApplication> jobApplication = new LinkedHashSet<>();

}