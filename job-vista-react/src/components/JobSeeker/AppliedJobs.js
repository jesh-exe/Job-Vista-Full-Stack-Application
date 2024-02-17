import React, { useState } from 'react'
import '../../css/JobSeeker/AppliedJobs.css'
import { useSelector } from 'react-redux'
import { getLoggedJobSeeker } from '../../redux/slices/JobSeeker/JobSeekerSlice'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function AppliedJobs() {

    const jobSeeker = useSelector(getLoggedJobSeeker);
    const navigate = useNavigate();

    const showJobDetails = (id) => {
        console.log(id);
        navigate("/jobs/" + id);
    }

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLoader(true);
        }, 2000)
        ScrollReveal().reveal(".top", {
            origin: "top",
            duration: 1500,
            distance: "150px",
            scale: 1
        })
        ScrollReveal().reveal(".emerge", {
            scale: 0.7,
            duration: 1500
        })
    })

    return (
        <div className='container' style={{ minHeight: "100vh" }}>
            {
                loader ?

                    <div className='row mb-5'>

                        <div className='text-center display-6 text-primary mt-5 mb-3 top'>
                            Applied Jobs
                        </div>

                        {
                            jobSeeker.appliedJobs.map((job, index) =>
                                <div className='col-sm-12 col-md-6 mt-3'>
                                    <div class="card mb-3 shadow p-3 h-100 job-holder " role='button' onClick={() => showJobDetails(job.jobId)}>
                                        <div class="row g-0">
                                            <div class="col-5 p-2">
                                                <img src={`data:image/jpeg;base64,${job.companyLogo}`} class="img-fluid rounded-circle" width={169} height={169} alt="..."></img>
                                            </div>

                                            <div class="col-7">
                                                <div class="card-body lh-lg">
                                                    <div className='fs-4 text-muted'>{job.companyName}
                                                    </div>
                                                    <div className='text-muted small'>
                                                        - Posted By : {job.recruiterName}
                                                    </div>
                                                    <div className='small mt-3'>
                                                        Role : {job.role}
                                                    </div>
                                                    <div className='small'>
                                                        Status : <span className='text-danger fw-bold'>{job.applicationStatus}</span>
                                                    </div>
                                                    <div className='small'>
                                                        Category : {job.jobCategory}
                                                    </div>
                                                    <div className='small'>
                                                        Salary : {job.expectedSalary}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                    : 
                    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "90vh" }}>
                        <div className="blob "></div>
                    </div>
            }
        </div>
    )
}
