import '../css/Header.css';
import logo from '../assets/jobvista_logo.png';
import navbarDefault from '../assets/navbar-default.png'
import recruiterImage from '../assets/recruiter.png'
import jobseeker from '../assets/jobseeker.png'
import React, { useEffect, useState } from 'react';
import { NavbarBrand, Nav, Button, Modal, Navbar, Container, Dropdown, Collapse } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedRecruiter, resetRecruiterDetails } from '../redux/slices/Recruiter/RecruiterSlice';
import { toast } from 'react-toastify';
import { getLoggedJobSeeker, resetLoggedJobSeekerDetails } from '../redux/slices/JobSeeker/JobSeekerSlice';


const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the logged in user information from Redux store
  const recruiter = useSelector(getLoggedRecruiter);
  // console.log("Recruiter: ", recruiter)

  const jobSeeker = useSelector(getLoggedJobSeeker);
  // console.log("JobSeeker: ", jobSeeker);


  useEffect(() => {
    ScrollReveal().reveal(".navbar-container", {
      origin: "top",
      duration: 1500,
      distance: "100px",
      scale: 1,
    });
  }, []);

  //Handle Logout Button Event
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      localStorage.removeItem("jwt-token");
      dispatch(resetRecruiterDetails());
      dispatch(resetLoggedJobSeekerDetails());
      toast.success("Logged out successfully")
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
              <NavLink to="/about" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item' >About</NavLink>

              {/* Contact us Button */}
              <NavLink to="/contactus" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>Contact</NavLink>

            </Nav>

            {/* Conditional Rendering for the Buttons */}
            <div className='text-center'>
              {recruiter.email == "" && jobSeeker.email == "" ?
                //Defult Buttons
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

                //Buttons for Recruiter
                <div className='d-flex justify-content-center'>
                  <div className="dropdown" style={{ width: "160px" }}>
                    <img className=" dropdown-toggle border-dark border rounded-5 cursor"
                      role='button'
                      src={
                        recruiter.email != "" ? `data:image/jpeg;base64,${recruiter.companyLogoBase64}` :
                          `data:image/jpeg;base64,${jobSeeker.profilePhoto}`
                      }
                      height={50} width={50} data-bs-toggle="dropdown" aria-expanded="false">
                    </img>
                    <div className="dropdown-menu dropdown-menu-right">
                      <NavLink to={
                        recruiter.email != "" ? "/dashboard" : "/jobseeker/applied"
                      } className="navlinks-middle text-center text-decoration-none menu-item">
                        <button className="dropdown-item" type="button">{recruiter.email != "" ? "Dashboard" : "Applied Jobs"}</button>
                      </NavLink>
                      {
                        jobSeeker.email == "" ? 
                      <NavLink to="/dashboard/profile" className="navlinks-middle text-center text-decoration-none menu-item">
                        <button className="dropdown-item" type="button">Profile</button>
                      </NavLink>
                      : 
                      ""
                      }
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
