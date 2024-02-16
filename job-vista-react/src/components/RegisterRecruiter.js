import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const RegisterRecruiter= () => {
  const [recruiter, setRecruiter] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    companyName: '',
    companyContact: '',
    companyAddress: '',
    companyUrl: '',
    companyFax: '',
    companyLogo: null,
    companyDesc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecruiter({ ...recruiter, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recruiter),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      const data = await response.json();
      console.log('Recruiter data submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <Container className="p-4 mb-4 rounded w-75 bg-white  ">
      <Row>
        <Col>
       
          <Row className="justify-content-center p-3">
              <Col md="auto">
              <h2 className="p-2 text-primary justify-content-center">Register </h2>
              </Col>
            </Row>  
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label className="p-1 " >First Name</Form.Label>
              <Form.Control 
                type="text"
                name="firstName"
                value={recruiter.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="middleName">
              <Form.Label  className="p-1 ">Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={recruiter.middleName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label className="p-1">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={recruiter.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label className="p-1 ">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={recruiter.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label className="p-1  ">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={recruiter.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="p-1 ">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={recruiter.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="companyName">
              <Form.Label className="p-1 ">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={recruiter.companyName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="companyContact">
              <Form.Label className="p-1  ">Company Contact</Form.Label>
              <Form.Control
                type="text"
                name="companyContact"
                value={recruiter.companyContact}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="companyAddress">
              <Form.Label className="p-1 ">Company Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="companyAddress"
                value={recruiter.companyAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="companyUrl">
              <Form.Label className="p-1 ">Company URL</Form.Label>
              <Form.Control
                type="text"
                name="companyUrl"
                value={recruiter.companyUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="companyFax">
              <Form.Label className="p-1 ">Company Fax</Form.Label>
              <Form.Control
                type="text"
                name="companyFax"
                value={recruiter.companyFax}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="companyDesc">
              <Form.Label className="p-1 ">Company Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="companyDesc"
                value={recruiter.companyDesc}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Row className="justify-content-center p-3">
              <Col md="auto">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterRecruiter;
