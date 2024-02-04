import React, { Component } from 'react'
import '../css/JobDetails.css'

export default class JobDetails extends React.Component {
    constructor(props) {
        console.log("In Constructor of Job Details Page!")
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            // <div className='main-container'>
            <div>
                <div className='img-holder d-flex justify-content-center '>
                    <div className='display-5 text-white d-flex'>
                        Full Stack Developer
                    </div>
                </div>
                <div className='container bg-light p-5 mb-5'>
                    <div className='row mt-3 mb-5'>
                        <div className='col-sm-12 col-md-8'>

                            {/* Heading Container */}
                            <div className='d-flex flex-column justify-content-end shadow-sm bg-white h-100 rounded pt-5 ps-4 pb-4 pe-2'>
                                <div className='mb-3'>
                                    <img className='img-fluid' src='https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' height={50} width={50}></img>
                                </div>
                                <div className='h3'>
                                    Full Stack Developer
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between mt-1 text-muted small'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-building" viewBox="0 0 16 16">
                                            <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                                        </svg>
                                        Amazon
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        Maharashtra
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee me-1" viewBox="0 0 16 16">
                                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                        </svg>
                                        90000/month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            {/* Job Overview & Stats */}
                            <div className='shadow-sm p-2 pt-4 bg-white rounded pt-3 ps-4 pb-4'>
                                <div className='fs-5 fw-bolder  mb-2'>
                                    Job Overview
                                </div>
                                <div className='small mb-3 lh-lg'>
                                    <div className='row overflow-auto'>
                                        <span className="col-6 overflow-hidden text-start fw-bold">
                                            Posted Date:
                                        </span>
                                        <span className="col-6 overflow-hidden text-end">
                                            12 January 2001
                                        </span>
                                        <span className="col-6 overflow-hidden text-start fw-bold">
                                            Location:
                                        </span>
                                        <span className="col-6 overflow-hidden text-end">
                                            Nagpur
                                        </span>
                                        <span className="col-6 overflow-hidden text-start fw-bold">
                                            Vacancy:
                                        </span>
                                        <span className="col-6 overflow-hidden text-end">
                                            12
                                        </span>
                                        <span className="col-6 overflow-hidden text-start fw-bold">
                                            Job Type
                                        </span>
                                        <span className="col-6 overflow-hidden text-end">
                                            Full Time
                                        </span>
                                        <span className="col-6 overflow-hidden text-start fw-bold">
                                            Montly Salary
                                        </span>
                                        <span className="col-6 overflow-hidden text-end">
                                            90000/-
                                        </span>

                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-danger'>Apply Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Left Side of the Page */}
                        <div className='col-sm-12 col-md-8'>

                            {/* Job Description Container */}
                            <div className='mt-3 p-2 bg-white rounded pt-3 ps-4 pb-4'>
                                <div className='fs-5 fw-bolder  mb-2'>
                                    Job Description
                                </div>
                                <div className='small'>
                                    This Repository contains original source code for the Full Stack Application - Job Vista, which was made while pursuing Post Graduation Diploma at CDAC - ACTS Pune
                                </div>
                            </div>

                            {/* Job Data (Education, Responsiblity etc container) */}
                            <div className='mt-2 p-2 bg-white rounded pt-3 ps-4 pb-2'>
                                <div className='fs-5 fw-bolder  mb-2'>
                                    Responsiblities
                                </div>
                                <div className='small'>
                                    <ul className='list-styled'>
                                        <li>Write Effective Code</li>
                                        <li>Collaborate with the team for better performance</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Skills Required */}
                            <div className='mt-1 p-2 bg-white rounded pt-3 ps-4 pb-4'>
                                <div className='fs-5 fw-bolder  mb-2'>
                                    Skills
                                </div>
                                <div className='small'>
                                    <ul className='list-styled'>
                                        <li>Write Effective Code</li>
                                        <li>Collaborate with the team for better performance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side of the Page */}
                        <div className='col-sm-12 col-md-4'>

                            {/* Company Information */}
                            <div className='mt-2 p-2 bg-white rounded pt-3 ps-4 pb-4'>
                                <div className='fs-5 fw-bolder mb-2'>
                                    Company Information
                                </div>
                                <span className='fw-bold'>Address</span>
                                <div className='small mb-2'>
                                    Pebbles 15, Friends Colony, Nagpur - 440013
                                </div>
                                <span className='fw-bold'>Website</span>
                                <div className='small'>
                                    https://jayesh-mart.netlify.app/
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
