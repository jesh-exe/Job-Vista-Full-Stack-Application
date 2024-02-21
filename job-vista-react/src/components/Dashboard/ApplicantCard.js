import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedRecruiter, resetRecruiterDetails } from '../../redux/slices/Recruiter/RecruiterSlice'
import { getApplicantData, setApplicant } from '../../redux/slices/Recruiter/ApplicantSlice'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import RecruiterService from '../../service/RecruiterService';
import emailjs from "emailjs-com";

export default function ApplicantCard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [applicant, setApplicant] = useState(useSelector(getApplicantData));
    console.log(applicant)

    const [resume, setResume] = useState();
    const containerRef = useRef();

    const sendEmail = (message) => {
        const templateParams = {
            to_email: `${applicant.email}`,
            to_name: `${applicant.name}`,
            from_name: 'Job Vista',
            message: `Hello, Your application status has been changed to ${message}!
                     Check out now!`,
        };

        emailjs.send(
            'service_zppuvz3',
            'template_pv0154e',
            templateParams,
            'eKCczjq-sU5_7ib6H'
        )
            .then((response) => {
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    //To fetch Resume from backend
    const getResume = () => {
        var jwtToken = JSON.parse(localStorage.getItem("jwt-token"));
        if (jwtToken) {
            if (jwtToken.holder === "RECRUITER") {
                RecruiterService.getResumeOfApplicant(applicant.email, jwtToken.jwtToken)
                    .then((response) => {
                        console.log(response);
                        setResume(response.data);
                        containerRef.current.scrollIntoView();
                        if (applicant.status != "HIRED") {
                            RecruiterService.updateApplicationStatus(applicant.jobId, "RESUME VIEWED", jwtToken.jwtToken)
                                .then((response) => {
                                    toast.success("Client Notified");
                                    setApplicant({
                                        ...applicant,
                                        status: "RESUME VIEWED"
                                    })
                                    sendEmail("Resume Viewed");

                                })
                                .catch((error) => {
                                    console.log(error)
                                    toast.error("Client Not Notified");
                                })
                        }
                    }).catch((error) => {
                        console.log(error)
                    })
            }
        }
        else {
            dispatch(resetRecruiterDetails());
            toast.error("Session Expired");
            navigate("/login");
        }
    }

    //To manage Hire Button Event
    const handleHire = () => {
        var jwtToken = JSON.parse(localStorage.getItem("jwt-token"));
        if (jwtToken) {
            if (jwtToken.holder === "RECRUITER") {
                if (applicant.status != "" || applicant.status != undefined) {
                    if (applicant.status === "INPROCESS" || applicant.status === "RESUME VIEWED") {
                        RecruiterService.hireApplicant(applicant.jobId, jwtToken.jwtToken)
                            .then((response) => {
                                toast.success("Applicant Hired!");
                                setApplicant({
                                    ...applicant,
                                    status: "HIRED"
                                })
                                sendEmail("Hired");
                            }).catch((error) => {
                                console.log(error)
                                toast.error("Error Please try again later!")
                            })
                    }
                    else if (applicant.status === "HIRED") {
                        toast.warn("Applicant was Hired Already!");
                    }
                }
            }
            else {
                dispatch(resetRecruiterDetails());
                toast.error("Session Expired");
                navigate("/login");
            }
        }
    }

    const handleReject = () => {

        var jwtToken = JSON.parse(localStorage.getItem("jwt-token"));
        if (jwtToken) {
            if (jwtToken.holder === "RECRUITER") {
                RecruiterService.updateApplicationStatus(applicant.jobId, "REJECT", jwtToken.jwtToken)
                    .then((response) => {
                        toast.success("Client Notified");
                        setApplicant({
                            ...applicant,
                            status: "REJECT"
                        })
                        sendEmail("Reject");
                    })
                    .catch((error) => {
                        console.log(error)
                        toast.error("Client Not Notified");
                    })
            }
        }
    }

    return (
        <div>
            <div className='container bg-light mb-5 pe-4'>
                <div className='row mt-3 mb-5'>

                    {/* Left Side */}
                    <div className='col-sm-12 col-md-4 mt-4 '>
                        {/* applicants photo */}
                        <div className='shadow pt-4 bg-white rounded pt-3 p-4 right-side'>
                            <div className='lead text-center fw-bolder mb-2'>
                                Profile
                            </div>
                            <div className='small mb-3 lh-lg'>
                                <div className='row overflow-auto'>
                                    <div className="col">
                                        <div className="card">
                                            <img src={`data:image/jpeg;base64,${applicant.profilePhoto}`} className="card-img-top rounded img-fluid" width={70} height={70} alt="..." />
                                            <div className="card-body">
                                                <div className="card-title lead text-center"> {applicant.name}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='col-sm-12 col-md-8 mb-2 mt-4'>
                        <div className='shadow bg-white rounded h-100 pt-5 ps-4 pe-2 left-side '>
                            <div>
                                <div className='lead fw-bolder text-muted text-start mb-3'>
                                    Applicant's Details
                                </div>
                                <div className='pt-4 bg-white rounded pb-4 right-side'>
                                    <div className='mb-3 lh-lg overflow-hidden'>
                                        <div className='row'>
                                            <span className="col-5 overflow-hidden text-start fw-bold">
                                                Name:
                                            </span>
                                            <span className="col-7 px-0 small overflow-hidden">
                                                {applicant.name}
                                            </span>
                                            <span className="col-5 overflow-hidden text-start fw-bold">
                                                Email:
                                            </span>
                                            <span className="col-7 px-0 small overflow-hidden">
                                                {applicant.email}
                                            </span>
                                            <span className="col-5 overflow-hidden text-start fw-bold">
                                                Gender:
                                            </span>
                                            <span className="col-7 px-0 small overflow-hidden">
                                                {applicant.gender}
                                            </span>
                                            <span className="col-5 overflow-hidden text-start fw-bold">
                                                GitHub:
                                            </span>
                                            <span className="col-7 px-0 small overflow-hidden">
                                                {applicant.githubRepositoryLink}
                                            </span>
                                            <span className="col-5 overflow-hidden text-start fw-bold">
                                                Address:
                                            </span>
                                            <span className="col-7 px-0 small overflow-hidden">
                                                {applicant.city}
                                            </span>
                                            <span className="col-5 overflow-hidden text-start fw-bold">
                                                Status:
                                            </span>
                                            <span className="col-7 px-0 small overflow-hidden">
                                                {applicant.status}
                                            </span>
                                            <span className="col-10 overflow-hidden text-start fw-bold">
                                                Experience
                                            </span>
                                            <div className='col-12 lh-sm mb-2 small table-responsive'>
                                                <table className='table table-striped border text-center'>
                                                    <thead className="thead-light">
                                                        <tr className="">
                                                            <th scope="col" >
                                                                Company
                                                            </th>
                                                            <th scope="col" >
                                                                Industry
                                                            </th>
                                                            <th scope="col" >
                                                                Role
                                                            </th>
                                                            <th scope="col" >
                                                                Location
                                                            </th>
                                                            <th scope="col" >
                                                                Salary
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="small">
                                                        {applicant.experiences.map((exp, index) => (
                                                            <tr key={index} className="text-muted">
                                                                <td >{exp.companyName}</td>
                                                                <td >{exp.industry}</td>
                                                                <td >{exp.role}</td>
                                                                <td >{exp.location}</td>
                                                                <td >{exp.salary}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <span className="col-12 overflow-hidden text-start fw-bold">
                                                Skills :
                                            </span>
                                            <span className="col-12 lh-sm small overflow-hidden">
                                                {applicant.skills}
                                            </span>
                                            <div className='col-12 text-center mt-5'>
                                                <button className='btn btn-outline-success mx-2 my-2' onClick={handleHire} disabled={applicant.status === "REJECT" ? true : false}>
                                                    {applicant.status === "HIRED" ? "Hired" : "Hire"}
                                                </button>
                                                <button className='btn btn-secondary mx-2 my-2' onClick={getResume}>
                                                    Resume
                                                </button>
                                                {
                                                    applicant.status === "HIRED" ? "" :
                                                        <button className='btn btn-outline-danger mx-2 my-2' onClick={handleReject} disabled={applicant.status === "REJECT" ? true : false}>
                                                            {applicant.status === "REJECT" ? "Rejected" : "Reject"}
                                                        </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resume Section */}
                    <div ref={containerRef} className='col-12 mt-5 col-sm-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8'>
                        {
                            resume ?
                                <div>
                                    <div className='text-center lead mb-2'>Resume of {applicant.name}</div>
                                    <embed
                                        src={`data:application/pdf;base64,${resume}`}
                                        className='text-center'
                                        type="application/pdf"
                                        width="100%"
                                        height="600px"
                                    />
                                </div>
                                :
                                <div className='lead mt-4 text-center'>
                                    Click Resume Button to View Resume
                                </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
