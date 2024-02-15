package com.jobvista.responseDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobListResponseDTO {
	
	private int id;
	private String recruiterName;
	private String companyName;
	private String companyAddress;
	private String companyUrl;
	private String companyLogo;
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
	private String postedDate;
	private int applicantCount;

}
