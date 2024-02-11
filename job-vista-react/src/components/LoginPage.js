import '../css/LoginPage.css'
import sideImage from "../assets/loginSide.svg"
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../redux/slices/LoginSlice';
import axios from 'axios';

const LoginPage = () => {

  useEffect(() => {
    ScrollReveal().reveal(".left", {
      origin: "left",
      duration: 1500,
      distance: "200px"
    })
    ScrollReveal().reveal(".emerge", {
      scale: 0.7,
      duration: 1500
    });
  })

  const [user, setUser] = useState({});
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // To handle Login Event
  const handleLogin = (e) => {
    e.preventDefault();
    // Sent to the Reducer where state is changed
    dispatch(setLoggedInUser(user));
  }


  return (
    <div className='container mt-5 mb-5 p-4'>
      <div className='row'>
        {/* Left Side Image */}
        <div className='col-sm-12 col-md-6 col-lg-6 mb-5 left'>
          <img src={sideImage} alt='' className='img-fluid login-side-image'></img>
        </div>
        {/* Right Side Form */}
        <div className='col-sm-12 col-md-6 col-lg-6 text-center ps-sm-1 pe-sm-1 ps-md-1 pe-md-1 ps-lg-5 pe-lg-5 emerge'>
          <div className="p-sm-5 p-md-2 p-lg-5">
            <div className='display-5 text-success mb-5'>Welcome Back</div>
            <form>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" autoFocus onChange={handleChange} />
              </div>
              {/* Password */}
              <div className="form-group mt-4">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} />
              </div>
              {/* Keep me Signed in */}
              <div className="form-group checkbox">
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
              </div>
              {/* Role Type */}
              <div className='mb-4 text-start'>
                <label htmlFor='roleType' className='text-muted'>Who are you?</label>
                <select className='form-select mt-1' name='roleType' id="roleType">
                  <option name="jobseeker">Job Seeker</option>
                  <option name="recruiter">Recruiter</option>
                  <option name="admin">Admin</option>
                </select>
              </div>
              {/* Login Button */}
              <button onClick={handleLogin} className="btn btn-outline-success">Log Me In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
