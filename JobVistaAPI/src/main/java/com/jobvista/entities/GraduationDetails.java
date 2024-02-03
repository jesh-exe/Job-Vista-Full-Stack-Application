package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "grad_edu_dtls")
public class GraduationDetails {
    @Id
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "js_id", nullable = false)
    private JobSeeker js;

    @Size(max = 100)
    @NotNull
    @Column(name = "grad_college_name", nullable = false, length = 100)
    private String gradCollegeName;

    @Size(max = 150)
    @NotNull
    @Column(name = "grad_university_name", nullable = false, length = 150)
    private String gradUniversityName;

    @Size(max = 100)
    @NotNull
    @Column(name = "grad_specialization", nullable = false, length = 100)
    private String gradSpecialization;

    @Column(name = "grad_duration")
    private Integer gradDuration;

    @NotNull
    @Column(name = "grad_addmission_year", nullable = false)
    private Integer gradAddmissionYear;

    @NotNull
    @Column(name = "grad_passing_year", nullable = false)
    private Integer gradPassingYear;

    @NotNull
    @Column(name = "grad_percentage", nullable = false)
    private Double gradPercentage;

    @NotNull
    @Column(name = "grad_backlogs", nullable = false)
    private Integer gradBacklogs;

    @NotNull
    @Column(name = "grad_attempts", nullable = false)
    private Integer gradAttempts;

    @Size(max = 100)
    @NotNull
    @Column(name = "grad_status", nullable = false, length = 100)
    private String gradStatus;

    @NotNull
    @Column(name = "grad_creation_date", nullable = false)
    private Instant gradCreationDate;

}