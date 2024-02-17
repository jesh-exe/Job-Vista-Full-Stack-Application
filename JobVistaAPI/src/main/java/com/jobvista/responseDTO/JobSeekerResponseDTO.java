package com.jobvista.responseDTO;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobSeekerResponseDTO {

	private String name;
	private String email;
	private String contactNumber;
	private String gender;
	private String portfolioLink;
	private String skills;
	private String gitRepositoryLink;
	private List<AppliedJobResponseDTO> appliedJobs = new ArrayList<>();
	private String profilePhoto;
	
}