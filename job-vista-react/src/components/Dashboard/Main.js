import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { BsPeopleFill } from 'react-icons/bs';
import { FaBriefcase, FaCheckSquare, FaEnvelopeOpenText } from 'react-icons/fa';
import '../../css/Dashboard/Main.css';
import ScrollReveal from 'scrollreveal';
import { useSelector } from 'react-redux';
import { getLoggedRecruiter } from '../../redux/slices/Recruiter/RecruiterSlice';
import { useNavigate } from 'react-router';

function Main() {

  const recruiter = useSelector(getLoggedRecruiter);
  // console.log(recruiter)

  useEffect(() => {
    ScrollReveal().reveal(".card-holder", {
      scale: 0.5,
      duration: 1500,
    });
    ScrollReveal().reveal(".heading-holder", {
      origin: "top",
      duration: 1500,
      distance: "300px",
      scale: 1,
    });
  }, []);

  return (
    <div className="container bg-grey p-5 mt-5 mb-5">
      <div className="row mt-3 mb-5 text-center">
        <div className='display-6 heading-holder'><span className='text-primary fw-bold'>Dashboard </span></div>
      </div>
      <div className="row mt-3 mb-5 card-container lead text-center">
        <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
          <Card className='py-4 card-holder bg-cherry rounded-3 border-0'>
            <Card.Header className='border-white text-start'>Total Applicants</Card.Header>
            <Card.Body>
              <div className='d-flex align-items-end justify-content-between'>
                <div className='pb-3'>
                  <BsPeopleFill className='card-icon' />
                </div>
                <div className='fs-2'>{recruiter.totalApplicants}</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
          <Card className="py-4 card-holder bg-blue-dark rounded-3 border-0">
            <Card.Header className='border-white text-start'>Total Jobs</Card.Header>
            <Card.Body>
              <div className='d-flex align-items-end justify-content-between'>
                <div className='pb-3'>
                  <FaBriefcase className='card-icon' />
                </div>
                <div className='fs-2'>{recruiter.jobs.length}</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
          <Card className='py-4 card-holder bg-orange-dark rounded-3 border-0'>
            <Card.Header className='border-white text-start'>Active Jobs</Card.Header>
            <Card.Body>
              <div className='d-flex align-items-end justify-content-between'>
                <div className='pb-3'>
                  <FaCheckSquare className='card-icon' />
                </div>
                <div className='fs-2'>{recruiter.activeJobs}</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 mb-3">
          <Card className='py-4 card-holder bg-green-dark rounded-3 border-0'>
            <Card.Header className='border-white text-start'>Total Hired</Card.Header>
            <Card.Body>
              <div className='d-flex align-items-end justify-content-between'>
                <div className='pb-3'>
                  <FaEnvelopeOpenText className='card-icon' />
                </div>
                <div className='fs-2'>{recruiter.totalHired}</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Main;
