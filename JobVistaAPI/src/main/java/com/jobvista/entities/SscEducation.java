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
@Table(name = "ssc_edu_dtls")
public class SscEducation {
	@OneToOne(cascade = CascadeType.ALL,optional = true)
	@JoinColumn(name = "js_id")
	@MapsId
    private JobSeeker js;

    @Size(max = 100)
    
    @Column(name = "ssc_school_name", nullable = false, length = 100)
    private String sscSchoolName;

    @Size(max = 255)
    
    @Column(name = "ssc_board_name", nullable = false)
    private String sscBoardName;

    
    @Column(name = "ssc_passing_year", nullable = false)
    private Integer sscPassingYear;

    
    @Column(name = "ssc_percentage", nullable = false)
    private Double sscPercentage;

    
    @Column(name = "ssc_creation_date", nullable = false)
    private Instant sscCreationDate;

}