import React from 'react'
import { useSelector } from 'react-redux'
import { getLoggedJobSeeker } from '../../redux/slices/JobSeeker/JobSeekerSlice'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function AppliedJobs() {

    const jobSeeker = useSelector(getLoggedJobSeeker);
    const navigate = useNavigate();

    const showJobDetails = (id) => {
        console.log(id);
        navigate("/jobs/"+id);
    }

    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className='container' style={{minHeight:"100vh"}}>
            <div className='row mb-5'>

                <div className='text-center display-6 text-primary mt-5 mb-3'>
                    Applied Jobs
                </div>

                {
                    jobSeeker.appliedJobs.map((job, index) =>
                        <div className='col-sm-12 col-md-6 mt-3'>
                            <div class="card mb-3 shadow p-3 h-100" onClick={() => showJobDetails(job.jobId)}>
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
        </div>
    )
}
