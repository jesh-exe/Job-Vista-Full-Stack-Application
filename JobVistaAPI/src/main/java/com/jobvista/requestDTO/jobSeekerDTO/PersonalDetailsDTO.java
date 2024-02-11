package com.jobvista.requestDTO.jobSeekerDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PersonalDetailsDTO {

	private String firstName;
	private String middleName;
	private String lastName;
	private String username;
	private String email;
	private String password;
	private String contactNumber;
	private String gender;
	private String portfolioLink;
	private String skills;
	private String gitRepositoryLink;
}
