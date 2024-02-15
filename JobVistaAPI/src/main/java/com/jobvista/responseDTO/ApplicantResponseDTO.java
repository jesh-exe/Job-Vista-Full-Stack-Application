package com.jobvista.responseDTO;

import java.util.List;

import com.jobvista.requestDTO.jobSeekerDTO.ExperienceDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApplicantResponseDTO {
	private String name;
	private String email;
	private String contactNumber;
	private String profilePhoto;
	private String gender;
	private String githubRepositoryLink;
	private String skills;
	private String city;
	List<ExperienceDTO> experiences;

}
