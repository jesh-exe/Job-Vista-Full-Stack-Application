package com.jobvista.responseDTO;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiExceptionResponseDTO {

	String message;
	LocalDateTime timestamp;
	
	public ApiExceptionResponseDTO(String message) {
		this.message = message;
		timestamp = LocalDateTime.now();
	}
}
