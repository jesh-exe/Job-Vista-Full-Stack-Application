package com.jobvista.exception;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jobvista.responseDTO.ApiExceptionResponseDTO;

@RestControllerAdvice
public class ApiExceptionHandler {

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
		
		e.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiExceptionResponseDTO("Internal Server Error!"));
	}
	
	//For Custom Thrown Exceptions
	@ExceptionHandler(ApiCustomException.class)
	public ResponseEntity<?> handleAPICustomExcetion(ApiCustomException e)
	{
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiExceptionResponseDTO(e.getMessage()));
	}
	
	//For Files
	@ExceptionHandler(IOException.class)
	public ResponseEntity<?> handleIOExceptionsForFile(IOException e)
	{
		return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("Failed to Upload Image");
	}

//	@ExceptionHandler(JwtCustomException.class)
//	public ResponseEntity<?> handleJWTExceptions(JwtCustomException e){
//		if(e.getMessage().startsWith("UNAUTHORIZED"))
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiExceptionResponseDTO(e.getMessage()));
//		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ApiExceptionResponseDTO(e.getMessage()));
//	}
//	
}
