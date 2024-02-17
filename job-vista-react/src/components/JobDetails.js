import React, { Component, useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import '../css/JobDetails.css'
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../redux/slices/JobsSlice'
import { getLoggedRecruiter, resetRecruiterDetails } from '../redux/slices/Recruiter/RecruiterSlice';
import { getLoggedJobSeeker, resetLoggedJobSeekerDetails } from '../redux/slices/JobSeeker/JobSeekerSlice';
import { toast } from 'react-toastify';
import JobService from '../service/JobService';

export default function JobDetails() {

    const props = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const jobSeeker = useSelector(getLoggedJobSeeker);

    const [job, setJob] = useState({
        "id": "",
        "recruiterName": "",
        "companyName": "",
        "companyAddress": "",
        "companyUrl": "",
        "companyLogo": "",
        "jobCategory": "",
        "experience": "",
        "minimumEducation": "",
        "description": "",
        "role": "",
        "responsibility": "",
        "jobCity": "",
        "workHours": "",
        "expectedSalary": "",
        "bond": "",
        "vacancies": "",
        "jobType": "",
        "postedDate": "",
        "applicantCount": "",
    });
    const jobs = useSelector(getJobs);

    const fetchJob = () => {
        var job = jobs.find(job => job.id == props.id);
        if (job) {
            setJob(job);
        }
    }

    const [isApplied, setIsApplied] = useState();

    const checkApplied = () => {
        var appliedJobs = jobSeeker.appliedJobs;
        var job = appliedJobs.find(job => job.jobId == props.id);
        if (job)
            setIsApplied(true);
    }

    useEffect(() => {
        fetchJob();
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
            scale: 0.7,
            duration: 1500,
        });
        checkApplied();
    },[])



    const handleApply = () => {
        if (window.confirm("Are you sure you want to Apply?")) {
            var jwtToken = JSON.parse(localStorage.getItem('jwt-token'));
            if (jwtToken) {
                if (jwtToken.holder === "RECRUITER") {
                    toast.warn("Recruiter Cannot Apply for Job")
                }
                else if (jwtToken.holder === "JOBSEEKER") {
                    if (!isApplied) {
                        if (jobSeeker.email != "" || jobSeeker.email != undefined || jwtToken.holder === "JOBSEEKER") {
                            JobService.applyForJob(props.id, jwtToken.jwtToken)
                                .then((response) => {
                                    navigate("/jobs")
                                    window.location.reload();
                                    toast.success("Job Applied Successfully!");
                                }).catch((response) => {
                                    console.log(response)
                                })
                        }
                    }
                    else {
                        toast.error("Already Applied")
                    }
                }
                else {
                    toast.warn("Login or Register as JobSeeker First")
                }
            }
            else {
                dispatch(resetRecruiterDetails());
                dispatch(resetRecruiterDetails());
                toast.warn("Login or Register as JobSeeker First");
            }
        }
    }



    return (
        <div>
            <div className='img-holder d-flex justify-content-center' >
                <div className='role-main display-4 text-white d-flex role'>
                    {job.role}
                </div>
            </div>
            <div className='container bg-light p-5 mb-5'>
                <div className='row mt-3 mb-5'>
                    <div className='col-sm-12 col-md-8 mb-2'>

                        {/* Heading Container */}
                        <div className='d-flex flex-column justify-content-end shadow-sm bg-white h-100 rounded pt-5 ps-4 pb-4 pe-2 left-side '>
                            <div className='mb-3'>
                                <img src={`data:image/jpeg;base64,${job.companyLogo}`} className='img-fluid rounded-circle' height={70} width={70}></img>
                            </div>
                            <div className='h3'>
                                {job.role}
                            </div>
                            <div className='d-flex flex-column flex-md-row justify-content-between mt-1 pb-4 text-muted'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-building" viewBox="0 0 16 16">
                                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                                    </svg>
                                    {job.companyName}
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
                    <div className='col-sm-12 col-md-4'>
                        {/* Job Overview & Stats */}
                        <div className='shadow-sm p-2 pt-4 bg-white rounded pt-3 px-3 pb-4 right-side'>
                            <div className='fs-5 fw-bolder text-center'>
                                Job Overview
                            </div>
                            <div className='small mb-3 lh-lg'>
                                <div className='row overflow-auto'>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Posted Date:
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.postedDate}
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Posted By:
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.recruiterName}
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Location:
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.jobCity}
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Vacancy:
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.vacancies}
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Category
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.jobCategory}
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
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Bond
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.bond} Year
                                    </span>
                                    <span className="col-6 overflow-hidden text-start fw-bold">
                                        Applicants
                                    </span>
                                    <span className="col-6 overflow-hidden text-end">
                                        {job.applicantCount}
                                    </span>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-danger' disabled={isApplied ? true : false} onClick={handleApply}>{isApplied ? "Applied" : "Apply"}</button>
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
                                {job.description}
                            </div>
                        </div>

                        {/* Job Data (Education, Responsiblity etc container) */}
                        <div className='mt-2 p-2 bg-white rounded pt-3 ps-4 pb-2 left-side'>
                            <div className='fs-5 fw-bolder  mb-2'>
                                Responsiblities
                            </div>
                            <div className='small'>
                                {job.responsibility}
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className='mt-2 p-2 bg-white rounded pt-3 ps-4 pb-4 left-side'>
                            <div className='fs-5 fw-bolder  mb-2'>
                                Experience
                            </div>
                            <div className='small'>
                                {job.experience}
                            </div>
                        </div>
                        <div className='mt-2 p-2 bg-white rounded pt-3 ps-4 pb-4 left-side'>
                            <div className='fs-5 fw-bolder  mb-2'>
                                Minimum Education
                            </div>
                            <div className='small'>
                                {job.minimumEducation}
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
                                {job.companyAddress}
                            </div>
                            <span className='fw-bold'>Website</span>
                            <div className='small'>
                                {job.companyUrl}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

