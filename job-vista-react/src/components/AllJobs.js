import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getJobs } from '../redux/slices/JobsSlice'
import { useNavigate } from 'react-router';
import ScrollReveal from 'scrollreveal';

export default function AllJobs() {

    const navigate = useNavigate();
    const jobs = useSelector(getJobs);

    const [loader, setLoader] = useState(false);
    useEffect(() => {
        window.scrollTo(0,0);
        setTimeout(() => {
            setLoader(true)
        }, 1500)
        ScrollReveal().reveal(".top", {
            origin: "top",
            duration: 1500,
            distance: "200px"
        });
        ScrollReveal().reveal(".left", {
            origin: "left",
            duration: 1500,
            distance: "200px"
        });
        ScrollReveal().reveal(".emerge", {
            scale: 0.7,
            duration: 1500,
    
        });
    })

    const showJobCard = (id) => {
        console.log(id)
        navigate("/jobs/" + id);
    }

    return (
        <div>
            {
                loader ?
                    jobs[0].id != "" ? 
                    <div className='container pt-5 pb-5' style={{ minHeight: "90vh" }}>
                        <div className='row'>
                            <div className='display-6 text-center mb-4 text-primary mt-2 top'>All Jobs</div>

                            <div className="input-group bg-body top">
                                <input type="text" placeholder='Search Jobs' className="form-control rounded-3 me-2" aria-label="Text input with dropdown button"></input>
                                <div className="input-group-append">
                                    <select className='form-select'>
                                        <option>Company</option>
                                        <option>Role</option>
                                        <option>Salary</option>
                                        <option>Recruiter</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-12 col-sm-3 bg-white border rounded-3 col-md-3 mt-4 left'>
                                <div className='my-4 p-3 text-muted'>
                                    <div className='lead text-center'>Filter Jobs</div>
                                    <div className='text-center'>
                                        <select className='mt-4 form-select'>
                                            <option>Job Type</option>
                                            <option>Full Time</option>
                                            <option>Part Time</option>
                                            <option>Internship</option>
                                        </select>
                                        <select className='mt-4 form-select'>
                                            <option>Category</option>
                                            <option>Java</option>
                                            <option>React</option>
                                            <option>Frontend</option>
                                            <option>Backend</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-sm-9 col-md-9 mt-4'>
                                {
                                    jobs.map((job, index) =>
                                        <div role='button' className="card mb-4 shadow p-2 text-center text-sm-start emerge">
                                            <div className="row" onClick={() => showJobCard(job.id)}>
                                                <div className="col-md-4">
                                                    <img src={`data:image/jpeg;base64,${job.companyLogo}`} className="p-5 img-fluid rounded-circle" width={250} alt="..."></img>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <div className='fs-4 text-muted'>{job.companyName}
                                                        </div>
                                                        <div className='text-muted small'>
                                                            - Posted By : {job.recruiterName}
                                                        </div>
                                                        <div className=' mt-3'>
                                                            <span className='text-muted'>Role: </span> {job.role}
                                                        </div>
                                                        <div className=''>
                                                            Category : {job.jobCategory}
                                                        </div>
                                                        <div className=''>
                                                            Salary : {job.expectedSalary} /-
                                                        </div>
                                                        <div className=''>
                                                            Description :
                                                            <div className='text-muted'>{job.description}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className='text-center text-muted fs-2 mt-5 pt-5' style={{minHeight:"90vh"}}>No Jobs Found</div>
                    :

                    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "90vh" }}>
                        <div className="blob "></div>
                    </div>

            }
        </div>

    )
}
