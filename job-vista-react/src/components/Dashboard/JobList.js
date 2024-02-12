import React, { useState } from "react";

export default function JobList() {
 
  const initialState = {
    recruiterEmail: "",
    jobCategory: "",
    title: "",
    experience: "",
    minimumEducation: "",
    description: "",
    role: "",
    responsibility: "",
    jobCity: "",
    workHours: 0,
    expectedSalary: "",
    bond: "",
    vacancies: 0,
    jobType: "",
  };

  
  const [dummyDataArray, setDummyDataArray] = useState([
    {
      title: "React Developer",
      jobCategory: "IT",
      vacancies: 5,
      applied: 14,
    },
    {
      title: "Business Analyst",
      jobCategory: "Marketing",
      vacancies: 10,
      applied: 20,
    },
    {
      title: "Sales Executive",
      jobCategory: "Finance",
      vacancies: 8,
      applied: 25,
    },
    {
      title: "Java Developer",
      jobCategory: "developer",
      vacancies: 9,
      applied: 15,
    },
  ]);


  const handleDelete = (index) => {
    const updatedDataArray = [...dummyDataArray];
    updatedDataArray.splice(index, 1);
    setDummyDataArray(updatedDataArray);
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
                      {dummyDataArray.map((job, index) => (
                        <tr key={index}>
                          <td className="text-center">{index + 1}</td>
                          <td className="text-center">{job.title}</td>
                          <td className="text-center">{job.jobCategory}</td>
                          <td className="text-center">{job.vacancies}</td>
                          <td className="text-center">{job.applied}</td>
                          <td className="text-center">
                            <a
                              href="your_link_here"
                              className="btn btn-primary mr-2"
                              target="_blank"
                              style={{ width: "6vw" }}
                            >
                              View
                            </a>

                            &nbsp;

                            <button
                              type="button"
                              className="btn btn-danger"
                              style={{ width: "6vw" }}
                              onClick={() => handleDelete(index)}
                            >
                              delete
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
