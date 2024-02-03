package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "job_seeker_dtls")
public class JobSeeker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "js_id", nullable = false)
    private Integer id;

    @Size(max = 45)
    @Column(name = "js_first_name", nullable = false, length = 45)
    private String jsFirstName;

    @Size(max = 45)
    @Column(name = "js_middle_name", length = 45)
    private String jsMiddleName;

    @Size(max = 45)
    @Column(name = "js_last_name", nullable = false, length = 45)
    private String jsLastName;

    @Size(max = 45)
    @Column(name = "js_username", nullable = false, length = 45)
    private String jsUsername;

    @Size(max = 45)
    @Column(name = "js_password", nullable = false, length = 45)
    private String jsPassword;

    @Size(max = 45)
    @Column(name = "js_email", nullable = false, length = 45)
    private String jsEmail;

    @Size(max = 10)
    
    @Column(name = "js_contact_number", nullable = false, length = 10)
    private String jsContactNumber;

    @Column(name = "js_profile_photo")
    private byte[] jsProfilePhoto;

    @Size(max = 30)
    
    @Column(name = "js_gender", nullable = false, length = 30)
    private String jsGender;

    @Column(name = "js_resume")
    private byte[] jsResume;

    @Size(max = 255)
    @Column(name = "js_portfolio_link")
    private String jsPortfolioLink;

    @Size(max = 255)
    @Column(name = "js_proj_repo_link")
    private String jsProjRepoLink;

    @Size(max = 60)
    @Column(name = "js_ks1", nullable = false, length = 60)
    private String jsKeySkill1;

    @Size(max = 60)
    @Column(name = "js_ks2", length = 60)
    private String jsKeySkill2;

    @Size(max = 60)
    @Column(name = "js_ks3", length = 60)
    private String jsKeySkill3;

    @Column(name = "js_login_timestamp")
    private LocalDateTime jsLoginTimestamp;
    
    @Column(name = "js_creation_date", nullable = false)
    private LocalDateTime jsCreationDate;
    
    @OneToMany(mappedBy = "jobSeeker",cascade = CascadeType.ALL,orphanRemoval = true,)
    private Set<Experience> experiences = new LinkedHashSet<>();

}