import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';


export default class Header extends Component {

  render() {
    return (
      <div className='sticky-nav'>
        <Navbar collapseOnSelect expand="lg" bg="dark"variant="dark">
          <Container>
            <Navbar.Brand href="#home"><span className='display-6'>
              JobVista

            </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Find a job</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <div>
                <button className="btn btn-primary">Register</button>
                <button className="ms-4 btn btn-outline-primary">Login</button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
