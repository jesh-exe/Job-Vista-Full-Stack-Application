import { useState } from 'react';
import { Tab, Tabs, Accordion } from 'react-bootstrap';
import $ from "jquery";

function RegisterJobSeeker() {
    const [currentTab, setCurrentTab] = useState("personal")

    const [personal, setPersonal] = useState({

    })

    const [sscEducation, setSscEducation] = useState({

    })

    const [hscEducation, setHscEducation] = useState({

    })

    const [graduationEducation, setGraduationEducation] = useState({

    })

    const handleExperience = () => {
        var header = "<Accordion.Item eventKey={1}>";
        var element = $("section:first-child").html();
        var footer = "</Accordion.Item>"
        $(".experienceContainer").append(header + element + footer);
    }


    return (
        <div className='m-5'>
            <Tabs
                defaultActiveKey={currentTab}
                id="justify-tab-example"
                className="mb-3"
                justify
                activeKey={currentTab}
                onSelect={(e) => setCurrentTab(e)}
            >
                <Tab eventKey="personal" title="Personal Details">

                </Tab>

                <Tab eventKey="address" title="Address">
                    <input type='text'></input>

                </Tab>

                <Tab eventKey="education" title="Education">
                    <input type='text'></input>
                    <button onClick={() => setCurrentTab("address")}>Prev</button>
                    <button onClick={() => setCurrentTab("experience")}>Next</button>
                </Tab>

                <Tab eventKey="experience" title="Experience">
                    <div className='container'>
                        <div className='text-center lead fs-2 py-5 p-md-4'>Experience Details</div>
                        <Accordion defaultActiveKey="0" className='experienceContainer'>
                            <Accordion.Item eventKey="0">
                                <section>
                                    <Accordion.Header>Experience { }</Accordion.Header>
                                    <Accordion.Body className='experienceBody'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-6'>
                                                <div className='form-group'>
                                                    <label htmlFor='role'>Role:</label>
                                                    <input
                                                        type='text'
                                                        id='role'
                                                        name='role'
                                                        className='form-control'
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-6'>
                                                <div className='form-group'>
                                                    <label htmlFor='companyName'>Company Name:</label>
                                                    <input
                                                        type='text'
                                                        id='companyName'
                                                        name='companyName'
                                                        className='form-control'
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className=''></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-4'>
                                                <div className='form-group'>
                                                    <label htmlFor='industry'>Industry:</label>
                                                    <input
                                                        type='text'
                                                        id='industry'
                                                        name='industry'
                                                        className='form-control'
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-4'>
                                                <div className='form-group'>
                                                    <label htmlFor='location'>Location:</label>
                                                    <input
                                                        type='text'
                                                        id='location'
                                                        name='location'
                                                        className='form-control'
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-4'>
                                                <div className='form-group'>
                                                    <label htmlFor='salary'>Salary:</label>
                                                    <input
                                                        type='text'
                                                        id='salary'
                                                        name='salary'
                                                        className='form-control'
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-4'>
                                                <div className='form-group'>
                                                    <label htmlFor='startDate'>Start Date:</label>
                                                    <input
                                                        type='date'
                                                        id='startDate'
                                                        name='startDate'
                                                        className='form-control'
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-4'>
                                                <div className='form-group'>
                                                    <label htmlFor='endDate'>End Date:</label>
                                                    <input
                                                        type='date'
                                                        id='endDate'
                                                        name='endDate'
                                                        className='form-control'
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-4'>
                                                <div className='form-group'>
                                                    <label htmlFor='status'>Status:</label>
                                                    <input
                                                        type='text'
                                                        id='status'
                                                        name='status'
                                                        className='form-control'
                                                        readOnly
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <button className='btn btn-primary' onClick={handleExperience}>Add</button>
                                        </div>
                                    </Accordion.Body>
                                </section>
                            </Accordion.Item>
                        </Accordion>

                        <div className='text-center mt-5'>
                            <button className='btn btn-outline-secondary' onClick={handleExperience}>Add New Experience</button>
                        </div>
                    </div>
                </Tab >



                <Tab eventKey="other" title="Other Details">
                    <input type='text'></input>
                    <button onClick={() => setCurrentTab("education")}>Prev</button>
                </Tab>

            </Tabs >
        </div >
    );
}

export default RegisterJobSeeker;