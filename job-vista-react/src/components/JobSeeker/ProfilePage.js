import React from 'react'
import { Card } from 'react-bootstrap'

export default function ProfilePage() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="col-sm-12 col-md-4 rounded-left">
                    <div className="card-block text-center">
                        <Card className="profile-card">
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                        <i className=" fa-7x mt-5"></i>
                        <h2 className="lead mt-2">Vaishnavi Mahajan</h2>
                        <p className='lead'>vaish@gmail.com
                            <i className="ms-2 far fa-edit fa-1x mb-4 "></i>
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 p-4 bg-white rounded-right mt-3">
                    <h4 className="mt-3 text-center mb-5">Profile</h4>
                    {/* <hr className="badge-primary "> */}
                    <div className="row offset-1">
                        <div className="col-sm-6">
                            <span className="abc">
                                <p className="font-weight-bold">Email : <span className="text-muted"> Nick234@gmail.com</span> </p>
                            </span>
                        </div>

                        <div className="col-sm-6">
                            <p className="font-weight-bold">Address : <span className="text-muted"> Panchvati, Nashik</span> </p>
                        </div>

                        <div className="col-sm-6">
                            <p className="font-weight-bold"> Skills : <span >
                                <ul className="text-muted font-weight-bold">
                                    <li>Problem-Solving</li>
                                    <li>Time Management</li>
                                </ul>
                            </span> </p>
                        </div>
                        <div className="col-sm-6">
                            <p className="font-weight-bold">Phone : <span className="text-muted"> 8857764234</span> </p>

                        </div>

                        <div className="col-sm-8 bg-white rounded-right">
                            <div className="row">
                                <div className="col-sm-8">
                                    <span className="abc">
                                        <p className="font-weight-bold">SSC : <span className="text-muted"> 92.80%</span> </p>

                                    </span>
                                </div>
                                <div className="col-sm-4">
                                    <p className="font-weight-bold">HSC : <span className="text-muted"> 75%</span> </p>
                                </div>

                                <div className="col-sm-8">
                                    <p className="font-weight-bold">Engineering(Cgpa): <span className="text-muted"> 9.26 </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
