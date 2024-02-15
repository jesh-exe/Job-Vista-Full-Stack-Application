package com.jobvista.responseDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppliedJobResponseDTO {

	private int jobId;
	private int applicationId;
	private String recruiterName;
	private String companyLogo;
	private String companyName;
	private String jobCategory;
	private String role;
	private String applicationStatus;
	private String expectedSalary;
	
}
