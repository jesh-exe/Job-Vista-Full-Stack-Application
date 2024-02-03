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
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "job_dtls")
public class JobDtl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "job_rec_id")
    private RecruiterDtl jobRec;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "job_jc_id", nullable = false)
    private JobCategory jobJc;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "job_jsc_id")
    private JobCategory jobJsc;

    @Size(max = 100)
    @NotNull
    @Column(name = "job_title", nullable = false, length = 100)
    private String jobTitle;

    @Size(max = 100)
    @Column(name = "job_exp", length = 100)
    private String jobExp;

    @Size(max = 100)
    @NotNull
    @Column(name = "job_min_edu", nullable = false, length = 100)
    private String jobMinEdu;

    @NotNull
    @Lob
    @Column(name = "job_desc", nullable = false)
    private String jobDesc;

    @Size(max = 100)
    @NotNull
    @Column(name = "job_role", nullable = false, length = 100)
    private String jobRole;

    @Lob
    @Column(name = "job_respo")
    private String jobRespo;

    @Size(max = 100)
    @NotNull
    @Column(name = "job_city", nullable = false, length = 100)
    private String jobCity;

    @Column(name = "job_work_hours")
    private Integer jobWorkHours;

    @Size(max = 100)
    @Column(name = "job_expected_sal", length = 100)
    private String jobExpectedSal;

    @Size(max = 50)
    @Column(name = "job_bond", length = 50)
    private String jobBond;

    @NotNull
    @Column(name = "job_vacancy", nullable = false)
    private Integer jobVacancy;

    @Size(max = 100)
    @NotNull
    @Column(name = "job_type", nullable = false, length = 100)
    private String jobType;

    @NotNull
    @Column(name = "job_post_date", nullable = false)
    private LocalDate jobPostDate;

    @NotNull
    @Column(name = "job_views", nullable = false)
    private Integer jobViews;

    @Size(max = 45)
    @NotNull
    @Column(name = "job_status", nullable = false, length = 45)
    private String jobStatus;

    @NotNull
    @Column(name = "job_creation_timestamp", nullable = false)
    private Instant jobCreationTimestamp;

    @OneToMany(mappedBy = "jaJ")
    private Set<JobApplicationDtl> jobApplicationDtls = new LinkedHashSet<>();

}