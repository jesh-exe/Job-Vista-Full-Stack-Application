import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGraduationEducationDetails, setHscEducationDetails, setSscEducationDetails } from '../../../redux/slices/JobSeeker/RegisterJobSeekerSlice';
import { toast } from "react-toastify";


export default function Education() {

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

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
        setHscEducation((prevState) => ({
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
        status: ''
    });

    const graduationEducationChange = (e) => {
        const { name, value } = e.target;
        setGraduationEducation((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }


    const saveEducation = (e) => {
        e.preventDefault();
        dispatch(setSscEducationDetails(sscEducation));
        dispatch(setHscEducationDetails(hscEducation));
        dispatch(setGraduationEducationDetails(graduationEducation));
        toast.success("Success, Experience unlocked")
    }


    return (
        <div className="container col-md-10">
            <div className="row text-center ">
                <h2 className="text-center lead fs-2 py-5 p-md-4"> SSC </h2>
            </div>
            <form onSubmit={saveEducation}>
                <div className='mb-5'>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="schoolName">School Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolNameSsc"
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
                                <label htmlFor="boardName">Board Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="boardNameSsc"
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
                                <label htmlFor="percentage">Percentage<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageSsc"
                                    name="percentage"
                                    defaultValue={sscEducation.percentage}
                                    onChange={sscEducationChange}
                                    title='Enter Percentage between 0 to 100'
                                    max={100}
                                    min={0}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="passingYear">Passing Year<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="passingYearSsc"
                                    name="passingYear"
                                    defaultValue={sscEducation.passingYear}
                                    onChange={sscEducationChange}
                                    required
                                    min={1950}
                                    max={2024}
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
                                <label htmlFor="schoolName">School Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolNameHsc"
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
                                <label htmlFor="boardName">Board Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="boardNameHsc"
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
                                <label htmlFor="boardName">Stream<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="streamSsc"
                                    name="stream"
                                    defaultValue={hscEducation.stream}
                                    onChange={hscEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="percentage">Percentage<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentage"
                                    name="percentage"
                                    defaultValue={hscEducation.percentage}
                                    onChange={hscEducationChange}
                                    required
                                    min={0}
                                    max={100}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="passingYear">Passing Year<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="passingYearHsc"
                                    name="passingYear"
                                    defaultValue={hscEducation.passingYear}
                                    onChange={hscEducationChange}
                                    required
                                    min={1950}
                                    max={2030}
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
                                <label htmlFor="collegeName">College Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="collegeNameGrad"
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
                                <label htmlFor="universityName">University Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="universityNameGrad"
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
                                <label htmlFor="specialization">Specialization<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="specializationGrad"
                                    name="specialization"
                                    defaultValue={graduationEducation.specialization}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="duration">Duration<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="durationGrad"
                                    name="duration"
                                    defaultValue={graduationEducation.duration}
                                    onChange={graduationEducationChange}
                                    required
                                    min={1}
                                    max={4}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="addmissionYear">Addmission Year<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="addmissionYearGrad"
                                    name="addmissionYear"
                                    defaultValue={graduationEducation.addmissionYear}
                                    onChange={graduationEducationChange}
                                    required
                                    min={2000}
                                    max={2050}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="passingYear">Passing Year<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="passingYearGrad"
                                    name="passingYear"
                                    defaultValue={graduationEducation.passingYear}
                                    onChange={graduationEducationChange}
                                    required
                                    min={2000}
                                    max={2050}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="status">Status<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="statusGrad"
                                    name="status"
                                    defaultValue={graduationEducation.status}
                                    onChange={graduationEducationChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-4 col-md-4 ">
                            <div className="form-group">
                                <label htmlFor="attempts">Attempt<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="attemptsGrad"
                                    name="attempts"
                                    defaultValue={graduationEducation.attempts}
                                    onChange={graduationEducationChange}
                                    required
                                    min={1}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 col-4 col-md-4 ">
                            <div className="form-group">
                                <label htmlFor="backlogs">Backlogs<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="backlogsGrad"
                                    name="backlogs"
                                    defaultValue={graduationEducation.backlogs}
                                    onChange={graduationEducationChange}
                                    required
                                    min={0}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 col-4 col-md-4 ">
                            <div className="form-group">
                                <label htmlFor="percentage">Percentage<span className='text-danger'> *</span></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageGrad"
                                    name="percentage"
                                    defaultValue={graduationEducation.percentage}
                                    onChange={graduationEducationChange}
                                    required
                                    min={0}
                                    max={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group text-center p-4">
                    <button type="submit" className="btn px-4 btn-success">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
