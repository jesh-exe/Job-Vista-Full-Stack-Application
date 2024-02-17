package com.jobvista.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration {

	@Autowired
	private JwtRequestFilter jwtFilter;

	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
	{
		http
		.cors()
		.and()
		.csrf().disable()
		.authorizeRequests()
		.antMatchers(HttpMethod.GET,
	    		"/swagger*/**",
	    		"/v3/api-docs/**",
	    		"/recruiter",
	    		"/jobseeker",
	    		"/jobs",
	    		"/jobs/job/*").permitAll()
	    .antMatchers(HttpMethod.POST,
	    		"/*/authenticate",
	    		"/recruiter",
	    		"/jobseeker",
	    		"/recruiter/image/*",
	    		"/jobseeker/files/*").permitAll()
	    .antMatchers(HttpMethod.POST,
	    		"/jobs/job").hasRole("RECRUITER")
	    .antMatchers(HttpMethod.GET,
	    		"/recruiter",
	    		"jobs/applicants/**").hasRole("RECRUITER")
	    .antMatchers(HttpMethod.DELETE,
	    		"/jobs/job/*",
	    		"/recruiter").hasRole("RECRUITER")
	    .antMatchers(HttpMethod.GET,
	    		"/jobseeker",
	    		"/job-application/*").hasRole("JOBSEEKER")
	    .antMatchers(HttpMethod.DELETE,
	    		"/jobseeker").hasRole("JOBSEEKER")
	    
	    .anyRequest().authenticated()
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
		.exceptionHandling()
	    .accessDeniedHandler((request, response, accessDeniedException) -> {
	    	response.sendError(HttpStatus.FORBIDDEN.value(),"Forbidden Access");
	    })
	    .authenticationEntryPoint((request, response, authException) -> {
	    	response.sendError(HttpStatus.UNAUTHORIZED.value(),"Unauthorized Access");
	    });
		return http.build();
	}
	
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}

}