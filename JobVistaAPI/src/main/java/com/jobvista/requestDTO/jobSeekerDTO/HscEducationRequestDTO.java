package com.jobvista.requestDTO.jobSeekerDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HscEducationRequestDTO {
	private String schoolName;
    private String boardName;
    private String stream;
    private Integer passingYear;
    private Double percentage;
	
}
