import React, { Component, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';
import logo from '../assets/jobvista_logo.png'
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';


export default function Header() {

  useEffect(() => {
    ScrollReveal().reveal(".navbar-container", {
      origin: "top",
      duration: 1500,
      distance: "100px",
      scale: 1,
    });
  }, [])


  return (
    <div className='sticky-nav shadow navbar-container'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <NavbarBrand href='#home' className='logoo'>
            <NavLink to="/">
              <img className='image-fluid ' src={logo} height={45} width={200}></img>
            </NavLink>
          </NavbarBrand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Home Button */}
              <NavLink to="/" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item' >Home</NavLink>

              {/* Find Jobs Button */}
              <NavLink to="/jobs" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item' >Find a job</NavLink>

              {/* About us Button */}
              <NavLink href="#pricing" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item' >About</NavLink>

              {/* Contact us Button */}
              <NavLink to="/contactus" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>Contact</NavLink>

            </Nav>
            <div className='text-center'>
              <button className="btn btn-success">Register</button>
              <button className="ms-4 btn btn-primary">Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
