import React, { Component, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';
import logo from '../assets/jobvista_logo.png'
import { NavbarBrand } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

export default function Header() {

  useEffect(() => {
    ScrollReveal().reveal(".logoo", {
      origin: "left",
      duration: 1500,
      distance: "200px",
      scale: 1,
    });
    ScrollReveal().reveal(".middle", {
      origin: "top",
      duration: 1500,
      distance: "100px",
      scale: 1,
    });
    ScrollReveal().reveal(".last", {
      origin: "right",
      duration: 1500,
      distance: "200px",
      scale: 1,
    });
  }, [])


  return (
    <div className='sticky-nav shadow logo'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <NavbarBrand href='#home' className='logoo'>
            <img className='image-fluid ' src={logo} height={45} width={200}></img>
          </NavbarBrand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto middle">
              <Nav.Link href="#home" className='ps-4 pe-4' >Home</Nav.Link>
              <Nav.Link href="#features" className='ps-4 pe-4' >Find a job</Nav.Link>
              <Nav.Link href="#pricing" className='ps-4 pe-4' >About</Nav.Link>
              <Nav.Link href="#contact" className='ps-4 pe-4' >Contact</Nav.Link>
            </Nav>
            <div className='text-center last'>
              <button className="btn btn-success">Register</button>
              <button className="ms-4 btn btn-primary">Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
