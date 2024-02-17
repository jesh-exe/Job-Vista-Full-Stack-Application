import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedRecruiterJobs, resetRecruiterDetails, setRecruiterDetails } from "../../redux/slices/Recruiter/RecruiterSlice";
import { NavLink, useNavigate } from "react-router-dom";
import RecruiterService from "../../service/RecruiterService";
import { toast } from "react-toastify";
import JobService from "../../service/JobService";
import { setJobs } from "../../redux/slices/JobsSlice";

export default function JobList() {

  const dispatch = useDispatch();
  const jobs = useSelector(getLoggedRecruiterJobs);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const handleDelete = (id) => {
    // const updatedDataArray = [...dummyDataArray];
    // updatedDataArray.splice(index, 1);
    // setDummyDataArray(updatedDataArray);
    if (window.confirm("Sure to Delete Job?")) {
      var jwtToken = JSON.parse(localStorage.getItem('jwt-token'));
      if (jwtToken) {
        if (jwtToken.holder !== "RECRUITER") {
          navigate("/login");
        }
        RecruiterService.deleteJob(id, jwtToken.jwtToken)
          .then((response) => {
            toast.success(response.data);
            RecruiterService.loadUserByJwtToken(jwtToken.jwtToken)
              .then((response) => {
                dispatch(setRecruiterDetails(response.data));
                JobService.getAllJobs()
                  .then((response) => {
                    dispatch(setJobs(response.data))
                  })
              })
              .catch((error) => {
                console.log(error)
              })
          })
          .catch((error) => {
            toast.error("Not Deleted")
            console.log(error)
          })

      }
      else {
        toast.error("Session Expired");
        dispatch(resetRecruiterDetails());
        navigate("/login");
      }
    }
  };

  return (
    <div className="container mt-5 mb-5 pt-4 text-primary">
      <div className="row">
        <div className="col">
          <div className="text-center display-6 mb-3">
            <div className="mx-auto">Jobs List</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col mt-4">
                <div className="table-responsive rounded-4">
                  <table className="table text-center table-striped ">
                    <thead className="thead-light">
                      <tr className="">
                        <th scope="col" >
                          Id
                        </th>
                        <th scope="col" >
                          Title
                        </th>
                        <th scope="col" >
                          Category
                        </th>
                        <th scope="col" >
                          Vacancies
                        </th>
                        <th scope="col" >
                          Type
                        </th>
                        <th scope="col" >
                          Applicants
                        </th>
                        <th scope="col" >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="small">
                      {jobs.map((job, index) => (
                        <tr key={index} className="text-muted">
                          <td >{index + 1}</td>
                          <td >{job.role}</td>
                          <td >{job.jobCategory}</td>
                          <td >{job.vacancies}</td>
                          <td >{job.jobType}</td>
                          <td>{job.applicantCount}</td>
                          <td >
                            <NavLink to={`/dashboard/${index}`}>
                              <button className="btn btn-primary btn-sm">
                                Detail
                              </button>
                            </NavLink>

                            &nbsp;

                            <button type="button" className="btn btn-danger btn-sm " onClick={() => handleDelete(job.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
