package com.jobvista.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	public MainController() {
		// TODO Auto-generated constructor stub
		System.out.println("Main Controller");
	}
	
	@RequestMapping("/")
	public void handleFirstCall() {
		System.out.println("First Call Handled");
	}
	
}
