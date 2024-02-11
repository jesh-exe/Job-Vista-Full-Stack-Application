package com.jobvista.requestDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@ToString(callSuper = false)
public class JobRequestDTO {
		private String recruiterEmail;
		private String jobCategory;
		private String title;
		private String experience;
	 	private String minimumEducation;
		private String description;	
		private String role;
		private String responsiblity;
		private String jobCity;
		private Integer workHours;
		private String expectedSalary;
		private String bond;
		private Integer vacancies;
		private String jobType;
	     
}
