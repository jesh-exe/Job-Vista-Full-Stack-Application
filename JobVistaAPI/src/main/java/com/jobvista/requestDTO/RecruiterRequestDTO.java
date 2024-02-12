package com.jobvista.requestDTO;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = false)
public class RecruiterRequestDTO {
	private String firstName;
	private String middleName;
	private String lastName;
	private String username;
	private String email;
	private String password;
	private String companyName;
	private String companyContact;
	private String companyAddr;
	private String companyUrl;
	private String companyFax;
	private String companyDesc;
}
