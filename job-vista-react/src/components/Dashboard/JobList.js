import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getLoggedRecruiterJobs } from "../../redux/slices/Recruiter/RecruiterSlice";

export default function JobList() {

  const[jobs,setJobs] = useState(useSelector(getLoggedRecruiterJobs));

  const handleDelete = (index) => {
    // const updatedDataArray = [...dummyDataArray];
    // updatedDataArray.splice(index, 1);
    // setDummyDataArray(updatedDataArray);
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col">
          <div className="text-center display-6">
            <div className="mx-auto">Jobs List</div>
          </div>

          <div className="container">
            <div className="row mx-auto">
              <div className="col mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-center">
                          Id
                        </th>
                        <th scope="col" className="text-center">
                          Job Title
                        </th>
                        <th scope="col" className="text-center">
                          Job Category
                        </th>
                        <th scope="col" className="text-center">
                          Vacancies
                        </th>
                        <th scope="col" className="text-center">
                          Total Applied
                        </th>
                        <th scope="col" className="text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.map((job, index) => (
                        <tr key={index}>
                          <td className="text-center">{job.id}</td>
                          <td className="text-center">{job.role}</td>
                          <td className="text-center">{job.jobCategory}</td>
                          <td className="text-center">{job.vacancies}</td>
                          <td className="text-center">{job.jobType}</td>
                          <td className="text-center">
                            <a
                              href="your_link_here"
                              className="btn btn-primary mx-1 mb-2"
                              target="_blank"
                            >
                              Details
                            </a>

                            &nbsp;

                            <button
                              type="button"
                              className="btn btn-danger mb-2 mx-1"
                              onClick={() => handleDelete(index)}
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
