package com.jobvista.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobvista.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
