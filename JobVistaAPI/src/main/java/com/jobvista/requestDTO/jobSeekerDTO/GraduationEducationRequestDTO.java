package com.jobvista.requestDTO.jobSeekerDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GraduationEducationRequestDTO {

	private String collegeName;
    private String universityName;
    private String specialization;
    private Integer duration;
    private Integer addmissionYear;
    private Integer passingYear;
    private Double percentage;
    private Integer backlogs;
    private Integer attempts;
    private String status;
	
}
