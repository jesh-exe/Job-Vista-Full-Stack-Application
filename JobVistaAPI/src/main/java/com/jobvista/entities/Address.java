package com.jobvista.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "js_address_dtls")
public class Address {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    
    @OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "js_id")
    @MapsId
    private JobSeeker jobSeeker;

    @Size(max = 255)
    @Column(name = "addr_lane1", nullable = false)
    private String lane1;

    @Size(max = 255)
    @Column(name = "addr_lane2")
    private String lane2;

    @Size(max = 100)
    @Column(name = "addr_city", nullable = false, length = 100)
    private String city;

    @Size(max = 6)
    @Column(name = "addr_pincode", nullable = false, length = 6)
    private String pincode;

    @Size(max = 100)
    @Column(name = "addr_state", nullable = false, length = 100)
    private String state;

    @Size(max = 100)
    @Column(name = "addr_country", nullable = false, length = 100)
    private String country;

}