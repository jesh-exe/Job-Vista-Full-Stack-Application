package com.jobvista.requestDTO.jobSeekerDTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobSeekerRequestDTO {

	private PersonalDetailsDTO personal;
	private AddressRequestDTO address;
	private EducationRequestDTO education;
	private List<ExperienceDTO> experiences;

}
