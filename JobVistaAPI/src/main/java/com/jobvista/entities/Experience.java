package com.jobvista.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
@Table(name = "exp_dtls")
public class Experience {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exp_id", nullable = false)
    private Integer id;

    @Size(max = 100)
    @Column(name = "exp_industry", nullable = false, length = 100)
    private String industry;

    @Size(max = 100)    
    @Column(name = "exp_company_name", nullable = false, length = 100)
    private String companyName;

    @Size(max = 100)
    @Column(name = "exp_role", nullable = false, length = 100)
    private String role;

    @Size(max = 100)    
    @Column(name = "exp_location", nullable = false, length = 100)
    private String location;

	@Column(name = "exp_start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "exp_end_date")
    private LocalDate endDate;

    @Column(name = "exp_duration")
    private Short duration;

    @Column(name = "exp_salary")
    private Double salary;

    @Size(max = 50)
    @Column(name = "exp_status", nullable = false, length = 50)
    private String status;

    @Column(name = "exp_creation_date", nullable = false)
    private LocalDateTime creationDate = LocalDateTime.now();
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "exp_js_id", nullable = false)
    private JobSeeker jobSeeker;
    
    @Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((companyName == null) ? 0 : companyName.hashCode());
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
		result = prime * result + ((role == null) ? 0 : role.hashCode());
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		return result;
	}
    
    //Checking if duplicate experience exists or not
    //On basis of - CompanyName, Role
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof Experience))
			return false;
		Experience other = (Experience) obj;
		if(companyName.equals(other.companyName) && role.equals(other.role))
			return true;
		return false;
	}

}