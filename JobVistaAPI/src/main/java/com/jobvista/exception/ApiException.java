package com.jobvista.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiException {

	@ExceptionHandler(RuntimeException.class)
	public void handleRuntimeException(RuntimeException e)
	{
		System.out.println(e.getMessage());
	}
	
}
