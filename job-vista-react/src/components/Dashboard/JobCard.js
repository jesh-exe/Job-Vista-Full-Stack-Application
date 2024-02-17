import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getLoggedRecruiter, resetRecruiterDetails } from '../../redux/slices/Recruiter/RecruiterSlice';
import RecruiterService from '../../service/RecruiterService';
import { toast } from 'react-toastify';
import { setApplicant } from '../../redux/slices/Recruiter/ApplicantSlice';
import ScrollReveal from 'scrollreveal';

export default function JobCard() {

  const props = useParams();
  const dispatch = useDispatch();
  const recruiterDetails = useSelector(getLoggedRecruiter);
  const navigate = useNavigate();


  const [job, setJob] = useState({
    "id": 0,
    "recruiterName": "",
    "jobCategory": "",
    "experience": "",
    "minimumEducation": "",
    "description": "",
    "role": "",
    "responsibility": "",
    "jobCity": "",
    "workHours": 0,
    "expectedSalary": "",
    "bond": "",
    "vacancies": 0,
    "jobType": "",
    "postedDate": "",
  });


  const [applicants, setApplicants] = useState([]);

  //Get job from job array of Redux Store
  const getJobFromArray = () => {
    var jobs = recruiterDetails.jobs;
    if (props.id < jobs.length) {
      var jobFromArray = jobs[props.id]
      setJob(jobFromArray);
    }
    if (jobFromArray)
      return jobFromArray.id;
  }

  //Fetching Applicants of job from backend
  const fetchJobDetails = () => {
    var jwtToken = JSON.parse(localStorage.getItem("jwt-token"));
    if (jwtToken) {
      if (jwtToken.holder === "RECRUITER") {
        var jobId = getJobFromArray();
        // console.log(jobId);
        RecruiterService.getApplicantsOfJob(jobId, jwtToken.jwtToken)
          .then((response) => {
            // console.log(response.data)
            setApplicants([...response.data]);
            // dispatch(setRecruiterDetails(response.data));
          }).catch((error) => {
            // console.log(error)
          })
      }
      else {
        toast.error("Not Authorized");
        navigate("/login")
      }
    }
    else {
      toast.error("Session Expired");
      dispatch(resetRecruiterDetails());
      navigate("/login")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchJobDetails();
    ScrollReveal().reveal(".left", {
      origin: "left",
      duration: 1500,
      distance: "200px",
      scale: 1,
    })

    ScrollReveal().reveal(".emerge", {
      duration: 1500,
      scale: 0.38,
    });

  }, [])

  const handleApplicant = (e) => {
    var applicant = JSON.parse(e.target.value);
    // console.log(applicant);
    dispatch(setApplicant(applicant));
    navigate("/dashboard/applicant");
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <div>
            <div className='container bg-light p-2 mb-5 mt-5'>
              <div className='text-center display-6 text-muted'>
                Job Details
              </div>
              <div className='row mt-3'>
                  {/* Heading Container */}
                <div className='col-sm-12 col-md-8 mt-3'>
                  <div className='d-flex flex-column justify-content-end shadow bg-white h-100 rounded pt-5 ps-4 pb-4 pe-2 left'>
                    <div className='mb-3'>
                      <img src={`data:image/jpeg;base64,${recruiterDetails.companyLogoBase64}`} height={80} width={80} className='rounded-circle border-secondary border'></img>
                    </div>
                    <div className='h3 text-primary'>
                      {job.role}
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between mt-1 text-muted small'>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-building" viewBox="0 0 16 16">
                          <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                        </svg>
                        {recruiterDetails.companyName}
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        {job.jobCity}
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee me-1" viewBox="0 0 16 16">
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                        </svg>
                        {job.expectedSalary}
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Job Overview & Stats */}
                <div className='col-sm-12 col-md-4 mt-3 emerge'>
                  <div className='shadow p-2 pt-4 bg-white rounded pt-3 ps-4 right-side '>
                    <div className='fs-5 fw-bolder mb-2 '>
                      Job Overview
                    </div>
                    <div className='small mb-3 lh-lg text-muted'>
                      <div className='row overflow-auto'>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Posted Date:
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.postedDate}
                        </span>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Location:
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.jobCity}
                        </span>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Category
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.jobCategory}
                        </span>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Vacancy:
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.vacancies}
                        </span>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Bond
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.bond}
                        </span>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Job Type
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.jobType}
                        </span>
                        <span className="col-6 overflow-hidden text-start fw-bold">
                          Montly Salary
                        </span>
                        <span className="col-6 overflow-hidden text-end">
                          {job.expectedSalary}/-
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Job Description Container */}
                <div className='col-sm-12 col-md-12 col-12 '>
                  <div className='mt-3 p-1 bg-white rounded pt-3 ps-4 pb-4 emerge'>
                    <div className='fs-5 fw-bolder  mb-2'>
                      Job Description
                    </div>
                    <div className='small'>
                      {job.description}
                    </div>
                  </div>

                  {/* Job Data (Education, Responsiblity etc container) */}
                  <div className='mt-3 p-1 bg-white rounded pt-3 ps-4 pb-2 emerge'>
                    <div className='fs-5 fw-bolder  mb-2'>
                      Responsiblities
                    </div>
                    <div className='small'>
                      {job.responsibility}
                    </div>
                  </div>

                  {/* Minimum Education Required */}
                  <div className='mt-3 p-1 bg-white rounded pt-3 ps-4 pb-4 emerge'>
                    <div className='fs-5 fw-bolder  mb-2'>
                      Minimum Education
                    </div>
                    <div className='small'>
                      {job.minimumEducation}
                    </div>
                  </div>

                  {/* Experience Required */}
                  <div className='mt-3 p-1 bg-white rounded pt-3 ps-4 pb-4 emerge'>
                    <div className='fs-5 fw-bolder  mb-2'>
                      Experience
                    </div>
                    <div className='small'>
                      {job.experience}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Table of Applicant */}
          <div className="row">
            <div className="col mt-1">
              <div className='display-6 text-center mb-4 text-muted emerge'>
                Applicants
              </div>
              <div className="table-responsive rounded-4">
                <table className="table text-center table-striped">
                  <thead className="thead-light">
                    <tr className="emerge">
                      <th scope="col" >
                        Id
                      </th>
                      <th scope="col" >
                        Profile
                      </th>
                      <th scope="col" >
                        Name
                      </th>
                      <th scope="col" >
                        Email
                      </th>
                      <th scope='col'>
                        Status
                      </th>
                      <th scope="col" >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className='emerge'>
                  {
                    applicants.length == 0 ? 
                     <tr>
                      <td colSpan="6">No Applicants Record Found</td>
                     </tr>
                     :
                    applicants.map((applicant, index) => (
                      <tr key={index} className="text-muted ">
                        <td >{index + 1}</td>
                        <td ><img src={`data:image/jpeg;base64,${applicant.profilePhoto}`} width={60} height={60} className='rounded-circle img-fluid'></img></td>
                        <td >{applicant.name}</td>
                        <td >{applicant.email}</td>
                        <td>{applicant.status}</td>
                        <td >
                          <button className="btn btn-primary btn-sm mx-1 mb-2" id={index} value={JSON.stringify(applicant)} onClick={handleApplicant}>
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
