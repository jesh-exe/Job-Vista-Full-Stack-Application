package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "recruiter_dtls")
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rc_id", nullable = false)
    private Integer id;

    @Size(max = 60)
    @Column(name = "rc_first_name", nullable = false, length = 60)
    private String rcFirstName;

    @Size(max = 60)
    @Column(name = "rc_middle_name", length = 60)
    private String rcMiddleName;

    @Size(max = 60)
    @Column(name = "rc_last_name", length = 60)
    private String rcLastName;

    @Size(max = 100)
    
    @Column(name = "rc_username", nullable = false, length = 100)
    private String rcUsername;

    @Size(max = 100)
    
    @Column(name = "rc_email", nullable = false, length = 100)
    private String rcEmail;

    @Size(max = 100)
    
    @Column(name = "rc_password", nullable = false, length = 100)
    private String rcPassword;

    @Size(max = 100)
    
    @Column(name = "rc_Company_name", nullable = false, length = 100)
    private String rcCompanyName;

    @Size(max = 20)
    
    @Column(name = "rc_Company_contact", nullable = false, length = 20)
    private String rcCompanyContact;

    
    @Lob
    @Column(name = "rc_Company_addr", nullable = false)
    private String rcCompanyAddr;

    @Size(max = 100)
    
    @Column(name = "rc_Company_url", nullable = false, length = 100)
    private String rcCompanyUrl;

    @Size(max = 50)
    @Column(name = "rc_Company_fax", length = 50)
    private String rcCompanyFax;

    
    @Column(name = "rc_Company_logo", nullable = false)
    private byte[] rcCompanyLogo;

    
    @Lob
    @Column(name = "rc_Company_desc", nullable = false)
    private String rcCompanyDesc;

    @Column(name = "rc_creation_timestamp")
    private Instant rcCreationTimestamp;

    @OneToMany(mappedBy = "id")
    private Set<Job> jobDtls = new LinkedHashSet<>();

}