package com.jobvista.entities;

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

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "ja_js_id", nullable = false)
    private JobSeeker jobSeeker;
    
    @ManyToOne(cascade = CascadeType.ALL,optional = false)
    @JoinColumn(name = "ja_j_id", nullable = false)
    private Job job;

    @Size(max = 45)
    @Column(name = "ja_status", nullable = false, length = 45)
    private String status;

}