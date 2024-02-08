import '../css/Header.css';
import logo from '../assets/jobvista_logo.png';
import recruiter from '../assets/recruiter.png'
import jobseeker from '../assets/jobseeker.png'

import React, { useEffect, useState } from 'react';
import { NavbarBrand, Nav, Button, Modal, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { useSelector } from 'react-redux';
import { getLoggedInUser } from '../redux/slices/LoginSlice';


const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Get the logged in user information from Redux store
  const loggedInUser = useSelector(getLoggedInUser);
  console.log(loggedInUser)

  useEffect(() => {
    ScrollReveal().reveal(".navbar-container", {
      origin: "top",
      duration: 1500,
      distance: "100px",
      scale: 1,
    });
  }, []);

  return (
    <div className='sticky-nav shadow navbar-container'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <NavbarBrand href='#home' className='logoo'>
            {/* Main Logo */}
            <NavLink to="/">
              <img className='image-fluid ' src={logo} height={45} width={200} alt="JobVista Logo" />
            </NavLink>
          </NavbarBrand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Home Button */}
              <NavLink to="/" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item' >Home</NavLink>

              {/* Find Jobs Button */}
              <NavLink to="/jobs" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'  >Find a Job</NavLink>

              {/* About us Button */}
              <NavLink href="#pricing" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item' >About</NavLink>

              {/* Contact us Button */}
              <NavLink to="/contactus" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>Contact</NavLink>

            </Nav>
            <div className='text-center'>
              {loggedInUser.email == "" ?
                <div>
                  {/* Register Button */}
                  <Button variant="success" onClick={handleShow}>
                    Register
                  </Button>
                  {/* Modal for Register Button to choose from as a recruiter or seeker */}
                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title >Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className='container text-center px-4'>
                        <div className='row gx-3'>
                          {/* Recruiter Section */}
                          <div className='col-sm-12 col-md-6 col-lg-6 p-4'>
                            <img className='img-fluid' height={300} width={300} src={recruiter}></img>
                            <button className='btn btn-outline-primary mt-5'>Recruiter</button>
                          </div>
                          {/* Job Seeker Section */}
                          <div className='col-sm-12 col-md-6 col-lg-6 p-4'>
                            <img className='img-fluid' height={300} width={300} src={jobseeker}></img>
                            <button className='btn btn-outline-primary mt-5'>Job Seeker</button>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/* Login Button */}
                  <NavLink to="/login" className="text-decoration-none">
                    <button className="ms-4 btn btn-primary">Login</button>
                  </NavLink>
                </div>
                :
                <div>
                  Welcome {loggedInUser.email}
                </div>
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div >
  );
}

export default Header;
