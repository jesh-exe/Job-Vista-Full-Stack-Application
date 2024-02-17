package com.jobvista.requestDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@ToString(callSuper = false)
public class JobRequestDTO {
	private String recruiterEmail;
	private String jobCategory;
	private String experience;
	private String minimumEducation;
	private String description;
	private String role;
	private String responsibility;
	private String jobCity;
	private Integer workHours;
	private String expectedSalary;
	private String bond;
	private Integer vacancies;
	private String jobType;
}
