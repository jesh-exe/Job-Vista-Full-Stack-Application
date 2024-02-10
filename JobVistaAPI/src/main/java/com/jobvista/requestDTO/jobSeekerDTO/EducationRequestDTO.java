package com.jobvista.requestDTO.jobSeekerDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EducationRequestDTO {
	private SscEducationRequestDTO ssc;
	private HscEducationRequestDTO hsc;
	private GraduationEducationRequestDTO graduation;
}
