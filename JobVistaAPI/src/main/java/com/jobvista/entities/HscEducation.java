package com.jobvista.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "hsc_edu_dtls")
public class HscEducation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@OneToOne(cascade = CascadeType.ALL,optional = true)
	@JoinColumn(name = "js_id")
	@MapsId
    private JobSeeker jobSeeker;

    @Size(max = 100)    
    @Column(name = "hsc_school_name", nullable = false, length = 100)
    private String schoolName;

    @Size(max = 100)
    @Column(name = "hsc_board_name", nullable = false, length = 100)
    private String boardName;

    @Size(max = 100)    
    @Column(name = "hsc_stream", nullable = false, length = 100)
    private String stream;

    @Column(name = "hsc_passing_year", nullable = false)
    private Integer passingYear;
    
    @Column(name = "hsc_percentage", nullable = false)
    private Double percentage;
    
    @Column(name = "hsc_creation_date", nullable = false)
    private LocalDateTime creationDate = LocalDateTime.now();

}