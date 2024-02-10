import React from 'react'
import { useState } from 'react';

export default function Education() {


    const [sscEducation, setSscEducation] = useState({
        schoolName: '',
        boardName: '',
        passingYear: '',
        percentage: ''
    });

    const sscEducationChange = (e) => {
        const { name, value } = e.target;
        setSscEducation((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const [hscEducation, setHscEducation] = useState({
        schoolName: '',
        boardName: '',
        stream: '',
        passingYear: '',
        percentage: ''
    });

    const hscEducationChange = (e) => {
        const { name, value } = e.target;
        setSscEducation((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const [graduationEducation, setGraduationEducation] = useState({
        collegeName: '',
        universityName: '',
        specialization: '',
        duration: '',
        addmissionYear: '',
        passingYear: '',
        percentage: '',
        backlogs: '',
        attempts: '',
    });

    const graduationEducationChange = (e) => {
        const { name, value } = e.target;
        setGraduationEducation((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }



    return (
        <div className="container col-md-10">
            <div className="row text-center ">
                <h2 className="text-center lead fs-2 py-5 p-md-4"> SSC </h2>
            </div>
            <form>
                <div className='mb-5'>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="schoolName">School Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolName"
                                    name="schoolName"
                                    defaultValue={sscEducation.schoolName}
                                    onChange={sscEducationChange}
                                    required
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="boardName">Board Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="boardName"
                                    name="boardName"
                                    defaultValue={sscEducation.boardName}
                                    onChange={sscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="percentage">Percentage </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage"
                                    name="percentage"
                                    defaultValue={sscEducation.percentage}
                                    onChange={sscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="passingYear">Passing Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="passingYear"
                                    name="passingYear"
                                    defaultValue={sscEducation.passingYear}
                                    onChange={sscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='mb-5 mt-4'>
                    <div className="row text-center ">
                        <h2 className="text-center lead fs-2 py-5 p-md-4"> HSC </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="schoolName">School Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolName"
                                    name="schoolName"
                                    defaultValue={hscEducation.schoolName}
                                    onChange={hscEducationChange}
                                    required
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="boardName">Board Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="boardName"
                                    name="boardName"
                                    defaultValue={hscEducation.boardName}
                                    onChange={hscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="boardName">Stream</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="stream"
                                    name="stream"
                                    defaultValue={hscEducation.stream}
                                    onChange={hscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="percentage">Percentage </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage"
                                    name="percentage"
                                    defaultValue={hscEducation.percentage}
                                    onChange={hscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="passingYear">Passing Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="passingYear"
                                    name="passingYear"
                                    defaultValue={hscEducation.passingYear}
                                    onChange={hscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='mt-4'>
                    <div className="row text-center ">
                        <h2 className="text-center lead fs-2 py-5 p-md-4"> Graduation </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="collegeName">College Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="collegeName"
                                    name="collegeName"
                                    defaultValue={graduationEducation.collegeName}
                                    onChange={graduationEducationChange}
                                    required
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="universityName">University Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="universityName"
                                    name="universityName"
                                    defaultValue={graduationEducation.universityName}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="specialization">Specialization</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="specialization"
                                    name="specialization"
                                    defaultValue={graduationEducation.specialization}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="duration">Duration</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="duration"
                                    name="duration"
                                    defaultValue={graduationEducation.duration}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="addmissionYear">Addmission Year </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addmissionYear"
                                    name="addmissionYear"
                                    defaultValue={graduationEducation.addmissionYear}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="passingYear">Passing Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="passingYear"
                                    name="passingYear"
                                    defaultValue={graduationEducation.passingYear}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-4 col-md-4 ">
                            <div className="form-group">
                                <label htmlFor="attempts">Attempt</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="attempts"
                                    name="attempts"
                                    defaultValue={graduationEducation.attempts}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 col-4 col-md-4 ">
                            <div className="form-group">
                                <label htmlFor="backlogs">Backlogs</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="backlogs"
                                    name="backlogs"
                                    defaultValue={graduationEducation.backlogs}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 col-4 col-md-4 ">
                            <div className="form-group">
                                <label htmlFor="percentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage"
                                    name="percentage"
                                    defaultValue={graduationEducation.percentage}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group text-center p-4">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
