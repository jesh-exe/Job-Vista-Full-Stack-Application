import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getLoggedRecruiter } from '../../redux/slices/Recruiter/RecruiterSlice'

export default function ProfilePage() {

    const recruiter = useSelector(getLoggedRecruiter);

    return (
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="col-sm-12 col-md-4 rounded-left">
                    <div className="card-block text-center">
                        <Card className="profile-card">
                            <img className="img-fluid" src={`data:image/jpeg;base64,${recruiter.companyLogoBase64}`} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                        <i className=" fa-7x mt-5"></i>
                        <h2 className="lead mt-2">{recruiter.firstName}</h2>

                    </div>
                </div>
                <div className="col-sm-12 col-md-8 p-4 bg-white rounded-right mt-3">
                    <h4 className="mt-3 text-center mb-5">Profile</h4>
                    {/* <hr className="badge-primary "> */}
                    <div className="row offset-1">
                        <div className="col-sm-6">
                            <span className="abc">
                                <p className="font-weight-bold">Email : <span className="text-muted"> {recruiter.email}</span> </p>
                            </span>
                        </div>

                        <div className="col-sm-6">
                            <p className="font-weight-bold">Company Name : <span className="text-muted"> {recruiter.companyName}</span> </p>
                        </div>

                        <div className="col-sm-6">
                            <p className="font-weight-bold"> Company URL : <span >
                                {recruiter.companyUrl}
                            </span> </p>
                        </div>

                        <div className="col-sm-6">
                            <p className="font-weight-bold"> Company Address : <span >
                                {recruiter.companyAddress}
                            </span> </p>
                        </div>


                        <div className="col-sm-6">
                            <p className="font-weight-bold"> Company Contact : <span >
                                {recruiter.companyContact}
                            </span> </p>
                        </div>
                        <div className="col-sm-6">
                            <p className="font-weight-bold"> Company Description : <span >
                                {recruiter.companyDescription}
                            </span> </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
