import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function NewJob() {

  const navigate = useNavigate();

  const [job, setJob] = useState({
    recruiterEmail: "jrmurodiya@gmail.com",
    jobCategory: "",
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
    jobType: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    axios.post("http://localhost:8080/jobs/job", job)
      .then((response) => { 
        console.log(response)
        alert("Job created successfully");
        // navigate('/dashboard');
      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container bg-white mt-5 p-5 mb-5">
      <div className="row text-center ">
        <h2 className="text-primary p-2 mb-4 display-6"> Add Job </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="role">Role</label>
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
              <label htmlFor="responsibility">Responsibility</label>
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
              <label htmlFor="bond">Bond</label>
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
                defaultValue={job.vacancies}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">

            <div className="form-group">
              <label htmlFor="workHours">Workhours</label>
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
              <label htmlFor="expectedSalary">Expected Salary</label>
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

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="jobCategory">Job Category</label>
              <input
                type='text'
                className="form-control"
                id="jobCategory"
                name="jobCategory"
                defaultValue={job.jobCategory}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6">
            <div className="form-group">
              <label htmlFor="jobType">Job Type</label>
              <input
                type='text'
                className="form-control"
                id="jobType"
                name="jobType"
                defaultValue={job.jobType}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-6'>
            <div className="form-group">
              <label htmlFor="description">Job Description</label>
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
              <label htmlFor="minimumEducation">Minimum Education</label>
              <textarea
                className="form-control"
                id="minimumEducation"
                name="minimumEducation"
                defaultValue={job.minimumEducation}
                onChange={handleChange}
                rows={4}
                required
              >
              </textarea>
            </div>
          </div>
        </div>
        <div className="form-group text-center p-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewJob