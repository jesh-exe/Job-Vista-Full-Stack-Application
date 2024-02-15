package com.jobvista.exception;

import lombok.Getter;

@Getter
public class JwtCustomException extends RuntimeException{
	public JwtCustomException(String message) {
		super(message);
	}
}
