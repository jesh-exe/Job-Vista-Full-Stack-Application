package com.jobvista.requestDTO.jobSeekerDTO;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExperienceDTO {

	private String role;
	private String companyName;
	private String industry;
	private String location;
	private Double salary;
	private LocalDate startDate;
	private LocalDate endDate;
	private String status;
	
}
