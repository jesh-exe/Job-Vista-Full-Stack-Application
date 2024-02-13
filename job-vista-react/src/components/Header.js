import '../css/Header.css';
import logo from '../assets/jobvista_logo.png';
import navbarDefault from '../assets/navbar-default.png'
import recruiterImage from '../assets/recruiter.png'
import jobseeker from '../assets/jobseeker.png'
import React, { useEffect, useState } from 'react';
import { NavbarBrand, Nav, Button, Modal, Navbar, Container, Dropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedRecruiter, resetRecruiterDetails } from '../redux/slices/Recruiter/RecruiterSlice';


const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the logged in user information from Redux store
  const recruiter = useSelector(getLoggedRecruiter);
  console.log(recruiter)

  useEffect(() => {
    ScrollReveal().reveal(".navbar-container", {
      origin: "top",
      duration: 1500,
      distance: "100px",
      scale: 1,
    });
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      localStorage.removeItem("jwt-token");
      dispatch(resetRecruiterDetails({}));
      navigate("/")
      
    }

  }

  return (
    <div className='sticky-nav shadow navbar-container'>
      <Navbar collapseOnSelect expand="lg" variant="light">
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
              {recruiter.email == "" ?
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
                            <img className='img-fluid' height={300} width={300} src={recruiterImage}></img>
                            <NavLink to="/register/recruiter">
                              <button className='btn btn-outline-primary mt-5' onClick={handleClose}>Recruiter</button>
                            </NavLink>
                          </div>
                          {/* Job Seeker Section */}
                          <div className='col-sm-12 col-md-6 col-lg-6 p-4'>
                            <img className='img-fluid' height={300} width={300} src={jobseeker}></img>
                            <NavLink to="/register/jobseeker">
                              <button className='btn btn-outline-primary mt-5' onClick={handleClose}>Job Seeker</button>
                            </NavLink>
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
                <div className='d-flex justify-content-center'>
                  <div className="dropdown" style={{ width: "160px" }}>
                    <img className=" dropdown-toggle border-dark border rounded-5 p-1" src={navbarDefault} height={40} width={40} data-bs-toggle="dropdown" aria-expanded="false">
                    </img>
                    <div className="dropdown-menu dropdown-menu-right">
                      <NavLink className="navlinks-middle text-center text-decoration-none menu-item">
                        <button className="dropdown-item" type="button">Dashboard</button>
                      </NavLink>
                      <NavLink className="navlinks-middle text-center text-decoration-none menu-item">
                        <button className="dropdown-item" type="button">Profile</button>
                      </NavLink>
                      <button className="dropdown-item text-center" type="button" onClick={handleLogout}>Logout</button>
                    </div>
                  </div>
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
