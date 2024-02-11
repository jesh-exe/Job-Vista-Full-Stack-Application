package com.jobvista.requestDTO.jobSeekerDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SscEducationRequestDTO {

	private String schoolName;
	private String boardName;
	private Integer passingYear;
	private Double percentage;

}
