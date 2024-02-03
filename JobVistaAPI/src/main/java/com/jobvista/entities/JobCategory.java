package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "job_category")
public class JobCategory {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "jc_id", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "jc_name", nullable = false)
    private String jcName;

    @Column(name = "jc_creation_timestamp")
    private Instant jcCreationTimestamp;

    @OneToMany(mappedBy = "jcParent")
    private Set<JobCategory> jobCategories = new LinkedHashSet<>();

    @OneToMany(mappedBy = "jobJc")
    private Set<Job> jobDtls = new LinkedHashSet<>();

}