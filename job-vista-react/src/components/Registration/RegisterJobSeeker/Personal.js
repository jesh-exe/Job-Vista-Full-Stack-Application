import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonal, setPersonalDetails } from '../../../redux/slices/RegisterJobSeekerSlice';


export default function Personal() {

    const dispatch = useDispatch();

    const [personal, setPersonal] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        contactNumber: "",
        gender: "",
        portfolioLink: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const personalDetailChange = (e) => {
        const { name, value } = e.target;
        setPersonal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleConfirmPassword = (e) => {
        const { name, value } = e.target;
        setConfirmPassword(value);
    }

    const savePersonalDetails = (e) => {
        e.preventDefault();
        if (confirmPassword !== personal.password)
            alert("Password Do Not Match!");
        else if (personal.gender === "none" || personal.gender === "")
            alert("Select Valid Gender");
        else {
            console.log(personal)
            dispatch(setPersonalDetails(personal));
            alert("Success!");
        }
    }

    return (
        <div className="container col-md-10">
            <div className="row text-center ">
                <h2 className="text-center lead fs-2 py-5 p-md-4">  Personal Details </h2>
            </div>
            <form onSubmit={savePersonalDetails}>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                pattern='[a-zA-Z]{2,50}'
                                defaultValue={personal.firstName}
                                onChange={personalDetailChange}
                                required
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="middleName"
                                name="middleName"
                                pattern='[a-zA-Z]{2,50}'
                                defaultValue={personal.middleName}
                                onChange={personalDetailChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                pattern='[a-zA-Z]{2,50}'
                                defaultValue={personal.lastName}
                                onChange={personalDetailChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                pattern='[a-zA-Z0-9]{2,50}'
                                defaultValue={personal.username}
                                onChange={personalDetailChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                defaultValue={personal.email}
                                onChange={personalDetailChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={personalDetailChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                                onChange={handleConfirmPassword}
                                readOnly={personal.password === "" ? true : false}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor='gender'>Gender</label>
                            <select className='form-select' name='gender' onChange={personalDetailChange}>
                                <option value="none">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact Number </label>
                            <input
                                type="number"
                                className="form-control"
                                id="contactNumber"
                                name="contactNumber"
                                defaultValue={personal.contactNumber}
                                onChange={personalDetailChange}
                                required
                                min={1000000000}
                                max={9999999999}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="portfolioLink">Portfolio Link</label>
                            <input
                                type="text"
                                className="form-control"
                                id="portfolioLink"
                                name="portfolioLink"
                                defaultValue={personal.portfolioLink}
                                onChange={personalDetailChange}
                            />
                        </div>
                    </div>
                </div>
                <button type='submit' className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    )
}
