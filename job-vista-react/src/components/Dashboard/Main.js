import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsPeopleFill } from 'react-icons/bs';
import { FaChartLine, FaBriefcase, FaCheckSquare , FaEnvelopeOpenText} from 'react-icons/fa';
import '../../css/Dashboard/Main.css';

function Main() {
  return (
    <div className="container bg-grey p-5 mb-5 main">
      <div className="row mt-3 mb-5">
        <div className="d-flex">
          <div className="flex-shrink-0">
            <FaChartLine size={30} color="blue" />
          </div>
          <div className="flex-grow-1 ms-3">
            <h4>Admin Dashboard</h4>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-5 card-container">
        <div className="col-sm-9 col-md-6 col-lg-3 mb-3">
          <Card border="primary">
            <Card.Header>Total Users</Card.Header>
            <Card.Body>
              <BsPeopleFill className='card-icon'/>
              <Card.Title>100</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-3 mb-3">
          <Card border="success">
            <Card.Header>Total Jobs</Card.Header>
            <Card.Body>
              <FaBriefcase className='card-icon'/>
              <Card.Title>100</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-3 mb-3">
          <Card border="danger">
            <Card.Header>Applied Jobs</Card.Header>
            <Card.Body>
              <FaCheckSquare className='card-icon'/>
              <Card.Title>100</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-3 mb-3">
          <Card border="warning">
            <Card.Header>Contacted Users</Card.Header>
            <Card.Body>
              <FaEnvelopeOpenText className='card-icon'/>
              <Card.Title>100</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Main;
