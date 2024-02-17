import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import RecruiterService from "../../service/RecruiterService";
import {
  resetRecruiterDetails,
  setRecruiterDetails,
} from "../../redux/slices/Recruiter/RecruiterSlice";
import { useDispatch } from "react-redux";

function NewJob() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [job, setJob] = useState({
    recruiterEmail: "jrmurodiya@gmail.com",
    jobCategory: [],
    experience: "",
    minimumEducation: "",
    description: "",
    role: "",
    responsibility: "",
    jobCity: "",
    workHours: "",
    expectedSalary: "",
    bond: "",
    vacancies: "",
    jobType: [],
  });

  const jobCategories = [
    "React Developer",
    "Java Developer",
    "Frontend Engineer",
    "Backend Developer",
  ];

  const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance", "Internship", "Temporary"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    var jwtToken = JSON.parse(localStorage.getItem("jwt-token"));
    if (jwtToken) {
      if (jwtToken.holder !== "RECRUITER") {
        navigate("/login");
      }
      RecruiterService.createNewJob(job, jwtToken.jwtToken)
        .then((response) => {
          RecruiterService.loadUserByJwtToken(jwtToken.jwtToken)
            .then((response) => {
              alert("Job Added");
              dispatch(setRecruiterDetails(response.data));
              navigate("/dashboard/jobs");
            })
            .catch((error) => {
              alert("Failed to Update Details");
            });
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 400) {
              alert(error.response.data.message);
            }
          }
          alert("Something went wrong!");
        });
    } else {
      alert("Session Expired");
      dispatch(resetRecruiterDetails());
      navigate("/login");
    }
    // dispatch();
  };

  return (
    <div className="container bg-white mt-5 p-5 mb-5">
      <div className="row text-center ">
        <h2 className="text-primary p-2 mb-4 display-6"> Add Job </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="role">
                Role<span className="text-danger"> *</span>
              </label>
              <input
                type="role"
                className="form-control"
                id="role"
                name="role"
                defaultValue={job.role}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="jobCity">City</label>
              <input
                type="text"
                className="form-control"
                id="jobCity"
                name="jobCity"
                defaultValue={job.jobCity}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <textarea
                className="form-control"
                id="experience"
                name="experience"
                rows={4}
                defaultValue={job.experience}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="responsibility">
                Responsibility<span className="text-danger"> *</span>
              </label>
              <textarea
                className="form-control"
                id="responsibility"
                name="responsibility"
                defaultValue={job.responsibility}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="bond">
                Bond<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="bond"
                name="bond"
                defaultValue={job.bond}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="vacancies">Vacancies</label>
              <input
                type="number"
                className="form-control"
                id="vacancies"
                name="vacancies"
                min={0}
                defaultValue={job.vacancies}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="workHours">
                Workhours<span className="text-danger"> *</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="workHours"
                name="workHours"
                defaultValue={job.workHours}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="expectedSalary">
                Expected Salary<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="expectedSalary"
                name="expectedSalary"
                defaultValue={job.expectedSalary}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* render job category from array in the form of select drop down options */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="jobCategory">
                Job Category<span className="text-danger"> *</span>
              </label>
              <select
                className="form-control"
                id="jobCategory"
                name="jobCategory"
                value={job.jobCategory}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {jobCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* render job type from array in the form of select drop down options */}
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="jobType">
                Job Type<span className="text-danger"> *</span>
              </label>
                <select
                className="form-control"
                id="jobType"
                name="jobType"
                value={job.jobType}
                onChange={handleChange}
                 >
                <option value="">Select Type</option>
                {jobTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="description">
                Job Description<span className="text-danger"> *</span>
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                defaultValue={job.description}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="minimumEducation">
                Minimum Education<span className="text-danger"> *</span>
              </label>
              <textarea
                className="form-control"
                id="minimumEducation"
                name="minimumEducation"
                defaultValue={job.minimumEducation}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
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
  );
}

export default NewJob;
