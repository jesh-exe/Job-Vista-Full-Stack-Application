import React, { Component, useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import '../css/JobDetails.css'
import jobseekerimg from "../assets/jobseekerimg.png"

export default function JobDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
        ScrollReveal().reveal(".role", {
            duration: 1500,
            scale: 0.38,
        });
        ScrollReveal().reveal(".left-side", {
            origin: "left",
            duration: 1500,
            distance: "100px",
            scale: 1,
        });
        ScrollReveal().reveal(".right-side", {
            origin: "right",
            duration: 1500,
            distance: "200px",
            scale: 1,
        });
    }, [])

    return (
        <div>
            <div className='img-holder d-flex justify-content-center' >
                <div className='role-main display-4 text-white d-flex role'>
                    Full Stack Developer
                </div>
            </div>
            <div className='container bg-light p-5 mb-5'>
                <div className='row mt-3 mb-5'>
                    <div className='col-sm-12 col-md-8 mb-2'>
                        
                        <div className='d-flex flex-column  justify-content-end shadow-sm bg-white h-100 rounded pt-5 ps-4 pb-4 pe-2 left-side'>
                          <div>
                            <div className='h3  fw-bolder '>
                                Applicant's Details
                            </div>
                            <div className='p-2 pt-4 bg-white rounded pt-3 ps-4 pb-4 right-side'>

                            <div className='small mb-3 lh-lg'>
                                <div className='row overflow-auto'>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Applicant's Name:
                                    </span>
                                    <span className="col-5 overflow-hidden text-end">
                                        Riya Murodiya
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Address:
                                    </span>
                                    <span className="col-4 overflow-hidden text-end">
                                        Nashik
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Experience(in years):
                                    </span>
                                    <span className="col-4 overflow-hidden text-end">
                                        2 Years
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Skills : 
                                        
                                    </span>
                                    <span className="col-5 overflow-hidden text-end">
                                       <div className='small'>
                                         <ul className='list-styled'>
                                            <li>GoodCommunication skill</li>
                                            <li>Problem solving skill</li>
                                         </ul>
                                      </div>
                                    </span>

                                </div>
                            </div>
                            
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-4'>
                        {/* applicants photo */}
                        <div className='shadow-sm p-2 pt-4 bg-white rounded pt-3 ps-4 pb-4 right-side'>
                            <div className='fs-5 fw-bolder  mb-2'>
                                Applicant's information
                            </div>
                            <div className='small mb-3 lh-lg'>
                                <div className='row overflow-auto'>
 

                                    <div class="col">
                                      <div class="card h-100">
                                        <img src={jobseekerimg} class="card-img-top rounded" width={90} height={150} alt="..."/>
                                            <div class="card-body">
                                                  <h5 class="card-title  text-center"> Riya Murodiya</h5>
                                                        
                                            </div>
                                     </div>
                                   </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Left Side of the Page */}
                    <div className='col-sm-12 col-md-8'>

                        {/* Job Description Container */}
                        <div className='mt-3 p-2 bg-white rounded pt-3 ps-4 pb-4 left-side'>
                            <div className='fs-5 fw-bolder  mb-2'>
                                Job Description
                            </div>
                            <div className='small'>
                                This Repository contains original source code for the Full Stack Application - Job Vista, which was made while pursuing Post Graduation Diploma at CDAC - ACTS Pune
                            </div>
                        </div>

                        {/* Job Data (Education, Responsiblity etc container) */}
                        <div className='mt-2 p-2 bg-white rounded pt-3 ps-4 pb-2 left-side'>
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
                        <div className='mt-1 p-2 bg-white rounded pt-3 ps-4 pb-4 left-side'>
                            <div className='fs-5 fw-bolder  mb-2'>
                                Skills
                            </div>
                            <div >
                                <ul className='list-styled' >
                                    <li>Write Effective Code</li>
                                    <li>Collaborate with the team for better performance</li>
                                </ul>

                                
                            </div>
                        </div>
                    </div>

                    {/* Right Side of the Page */}
                    <div className='col-sm-12 col-md-4 right-side'>

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

