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
	private List<JobResponseDTO> jobs;
	private int totalApplicants;
	private int activeJobs;
	private String companyLogoBase64;
<<<<<<< HEAD
<<<<<<< HEAD
=======
	private int totalHired;
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
	private int totalHired;
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
}
