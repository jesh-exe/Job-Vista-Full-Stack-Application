package com.jobvista.responseDTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecruiterResponseDTO {
	private String firstName;
	private String username;
	private String email;
	private String companyName;
	private String companyUrl;
	private String companyDescription;
	private String companyAddress;
	private String companyContact;
	private List<JobResponseDTO> jobs;
	private int totalApplicants;
	private int activeJobs;
	private String companyLogoBase64;
	private int totalHired;
}
