package com.jobvista.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jobvista.responseDTO.ApiExceptionResponseDTO;

@RestControllerAdvice
public class ApiException {

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiExceptionResponseDTO(e.getMessage()));
	}
	
	

}
