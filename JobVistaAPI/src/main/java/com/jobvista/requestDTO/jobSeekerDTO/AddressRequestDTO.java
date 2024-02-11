package com.jobvista.requestDTO.jobSeekerDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressRequestDTO {

	private String lane1;
	private String lane2;
	private String city;
	private String state;
	private String country;
	private String pincode;
}
