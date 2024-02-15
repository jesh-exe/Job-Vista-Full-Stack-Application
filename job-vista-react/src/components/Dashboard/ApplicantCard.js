import React from 'react'
import { useSelector } from 'react-redux'
import { getLoggedRecruiter } from '../../redux/slices/Recruiter/RecruiterSlice'

export default function ApplicantCard() {
    const recruiter = useSelector(getLoggedRecruiter);
    return (
        <div>
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
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={`data:image/jpeg;base64,${recruiter.companyLogoBase64}`} className="card-img-top rounded" width={90} height={150} alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title "> Riya Murodiya</h5>
                                                <p className="card-text">Job seekers photo, attaching others details also. Fit for this job role.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
