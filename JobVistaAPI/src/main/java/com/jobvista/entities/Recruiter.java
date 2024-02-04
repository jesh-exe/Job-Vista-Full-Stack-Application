package com.jobvista.entities;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
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
@Table(name = "recruiter_dtls")
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rc_id", nullable = false)
    private Integer id;

    @Size(max = 60)
    @Column(name = "rc_first_name", nullable = false, length = 60)
    private String firstName;

    @Size(max = 60)
    @Column(name = "rc_middle_name", length = 60)
    private String middleName;

    @Size(max = 60)
    @Column(name = "rc_last_name", length = 60)
    private String lastName;

    @Size(max = 100)
    @Column(name = "rc_username", nullable = false, length = 100)
    private String username;

    @Size(max = 100)    
    @Column(name = "rc_email", nullable = false, length = 100,unique = true)
    private String email;

    @Size(max = 100)    
    @Column(name = "rc_password", nullable = false, length = 100)
    private String password;

    @Size(max = 100)    
    @Column(name = "rc_Company_name", nullable = false, length = 100)
    private String companyName;

    @Size(max = 20)    
    @Column(name = "rc_Company_contact", nullable = false, length = 20)
    private String companyContact;

    @Lob
    @Column(name = "rc_Company_addr", nullable = false,length = 750,columnDefinition = "TEXT")
    private String companyAddr;

    @Size(max = 100)
    @Column(name = "rc_Company_url", nullable = false, length = 100,unique = true)
    private String companyUrl;

    @Size(max = 50)
    @Column(name = "rc_Company_fax", length = 50)
    private String companyFax;

    @Lob
    @Column(name = "rc_Company_logo", nullable = false,length = 1000000,columnDefinition = "MEDIUMBLOB")
    private byte[] companyLogo;
    
    @Lob
    @Column(name = "rc_Company_desc", nullable = false, length = 3500,columnDefinition = "TEXT")
    private String companyDesc;

    @Column(name = "rc_creation_timestamp")
    private LocalDateTime creationTimestamp;

    @OneToMany(mappedBy = "recruiter")
    private Set<Job> jobs = new LinkedHashSet<>();

}