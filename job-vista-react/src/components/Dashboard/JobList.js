import React from "react";
import { useSelector } from "react-redux";
import { getLoggedRecruiterJobs } from "../../redux/slices/Recruiter/RecruiterSlice";

export default function JobList() {

  const jobs = useSelector(getLoggedRecruiterJobs);

  const handleDelete = (index) => {
    // const updatedDataArray = [...dummyDataArray];
    // updatedDataArray.splice(index, 1);
    // setDummyDataArray(updatedDataArray);
  };

  return (
    <div className="container mt-5 mb-5 pt-4 text-primary">
      <div className="row">
        <div className="col">
          <div className="text-center display-6 mb-3">
            <div className="mx-auto">Jobs List</div>
          </div>
          <div className="container">
            <div className="row mx-auto">
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
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody >
                      {jobs.map((job, index) => (
                        <tr key={index} className="text-muted">
                          <td >{index + 1}</td>
                          <td >{job.role}</td>
                          <td >{job.jobCategory}</td>
                          <td >{job.vacancies}</td>
                          <td >{job.jobType}</td>
                          <td >
                            <a
                              href="your_link_here"
                              className="btn btn-primary btn-sm mx-1 mb-2"
                              target="_blank"
                            >
                              Detail
                            </a>

                            &nbsp;

                            <button
                              type="button"
                              className="btn btn-danger btn-sm mb-2 mx-1"
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
