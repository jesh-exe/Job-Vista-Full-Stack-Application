import '../css/LoginPage.css'
import sideImage from "../assets/loginSide.svg"
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useDispatch } from 'react-redux';
import axios, { HttpStatusCode } from 'axios';
import { error } from 'jquery';
import { useNavigate } from 'react-router';
import { setRecruiterDetails } from '../redux/slices/Recruiter/RecruiterSlice';
import RecruiterService from '../service/RecruiterService';
import { toast } from 'react-toastify';
import JobSeekerService from '../service/JobSeekerService';


const LoginPage = () => {

  useEffect(() => {
    ScrollReveal().reveal(".left", {
      origin: "left",
      duration: 1500,
      distance: "200px",
    });
    ScrollReveal().reveal(".emerge", {
      scale: 0.7,
      duration: 1500,
    });
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
    roleType: "JobSeeker",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // To handle Login Event
  const handleLogin = (e) => {
    e.preventDefault();
    // Sent to the Reducer where state is changed
    console.log(user)
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    //Jobseeker
    if (user.roleType === "JobSeeker") {
      JobSeekerService.authenticateJobSeeker(user)
        .then((response) => {
          var jwtToken = response.data.jwtToken
          //Storing JWT as a object
          var jwtTokenDetails = {
            holder: "JOBSEEKER",
            jwtToken: jwtToken
          }
          localStorage.setItem("jwt-token", JSON.stringify(jwtTokenDetails));
          toast.success("Successfully authenticated!");
          navigate("/")
        }).catch((error) => {
          console.log(error)
          if (error.code == "ERR_NETWORK")
            toast.error("Server Busy");
          else {
            toast.error("Invalid credentials")
          }
        })
    }

    //Recruiter
    else if (user.roleType === "Recruiter") {
      //Fetching JWT Token
      RecruiterService.authenticateRecruiter(formData)
        .then((response) => {
          var jwtToken = response.data.jwtToken
          //Storing JWT as a object
          var jwtTokenDetails = {
            holder: "RECRUITER",
            jwtToken: jwtToken
          }
          //Storing JWT in localstorage
          localStorage.setItem("jwt-token", JSON.stringify(jwtTokenDetails));
          toast.success("Successfully authenticated!");
          navigate("/dashboard")  
        }).catch((error) => {
          console.log(error)
          if (error.code == "ERR_NETWORK")
            toast.error("Server Busy");
          else {
            toast.error("Invalid credentials")
          }
        })
    }

    //Admin -> Optional
    else if (user.roleType === "Admin") {

    }
  };

  return (
    <div className="container mt-5 mb-5 p-4">
      <div className="row">

        {/* Left Side Image */}
        <div className="col-sm-12 col-md-6 col-lg-6 mb-5 left">
          <img
            src={sideImage}
            alt=""
            className="img-fluid login-side-image"
          ></img>
        </div>

        {/* Right Side Form */}
        <div className="col-sm-12 col-md-6 col-lg-6 text-center ps-sm-1 pe-sm-1 ps-md-1 pe-md-1 ps-lg-5 pe-lg-5 emerge">
          <div className="p-sm-5 p-md-2 p-lg-5">
            <div className="display-5 text-success mb-5">Welcome Back</div>
            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email<span className='text-danger'> *</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoFocus
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Password */}
              <div className="form-group mt-4">
                <label htmlFor="password">Password<span className='text-danger'> *</span></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\s])(?=.*[\S])[^\s]{8,}$"
                  title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and no spaces"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Keep me Signed in */}
              {/* <div className="form-group checkbox">
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
              </div> */}
              {/* Role Type */}
              <div className="mb-4 text-start">
                <label htmlFor="roleType" className="text-muted">
                  Who are you?
                </label>
                <select
                  className="form-select mt-1"
                  name="roleType"
                  id="roleType"
                  value={user.roleType}
                  onChange={handleChange}
                >
                  <option name="jobseeker">JobSeeker</option>
                  <option name="recruiter">Recruiter</option>
                  {/* <option name="admin">Admin</option> */}
                </select>
              </div>
              {/* Login Button */}
              <button type="submit" className="btn btn-outline-success" >
                Log Me In
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
