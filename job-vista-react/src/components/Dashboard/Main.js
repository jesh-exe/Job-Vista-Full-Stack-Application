import React from 'react'
import Card from 'react-bootstrap/Card'
import { BsPeopleFill } from 'react-icons/bs'
import { FaChartLine, FaBriefcase, FaCheckSquare , FaEnvelopeOpenText} from 'react-icons/fa'
function Main() {
  return (
    <div className="container bg-grey p-5 mb-5">
        <div className="row mt-3 mb-5">
            <div class="d-flex">
                <div class="flex-shrink-0">
                <FaChartLine size={30} color="blue" />

                </div>
                <div class="flex-grow-1 ms-3">
                    <h4>Admin Dashboard</h4>
                </div>
            </div>
        </div>
        <div className="row mt-3 mb-5">
            <div className="col-sm-12 col-md-3 ">
                <Card border="primary">
                    <Card.Header>Total Users</Card.Header>
                    <Card.Body>
                    <BsPeopleFill className='card-icon'/>
                    <Card.Title>Primary</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-12 col-md-3 ">
                <Card border="success">
                    <Card.Header>Total Jobs</Card.Header>
                    <Card.Body>
                    <FaBriefcase className='card-icon'/>
                    <Card.Title>Primary</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-12 col-md-3 ">
                <Card border="danger">
                    <Card.Header>Applied Jobs</Card.Header>
                    <Card.Body>
                    <FaCheckSquare className='card-icon'/>
                    <Card.Title>Primary</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-12 col-md-3 ">
                <Card border="warning">
                    <Card.Header>Contacted Users</Card.Header>
                    <Card.Body>
                    <FaEnvelopeOpenText className='card-icon'/>
                    <Card.Title>Primary</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Main