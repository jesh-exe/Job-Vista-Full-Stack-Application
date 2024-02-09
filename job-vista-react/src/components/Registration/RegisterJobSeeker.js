import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function RegisterJobSeeker() {
  const [currentTab, setCurrentTab] = useState("personal");

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

  const personalDetailChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    setSscEducation((prevState) => ({
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

  return (
    <div className="m-5">
      <Tabs
        defaultActiveKey={currentTab}
        id="justify-tab-example"
        className="mb-3"
        justify
        activeKey={currentTab}
        onSelect={(e) => setCurrentTab(e)}
      >
        <Tab eventKey="personal" title="Personal Details">
          <div className="container bg-white mt-5 p-sm-1 p-md-4 p-lg-5 mb-5">
            <div className="row text-center ">
              <h2 className="text-primary p-2 mb-4 display-6">  Personal Details </h2>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      defaultValue={personal.firstName}
                      onChange={personalDetailChange}
                      required
                      autoFocus
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="middleName">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="middleName"
                      name="middleName"
                      defaultValue={personal.middleName}
                      onChange={personalDetailChange}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      defaultValue={personal.lastName}
                      onChange={personalDetailChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      defaultValue={personal.username}
                      onChange={personalDetailChange}
                      required
                    />
                  </div>
                </div>

                <div className="col">
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
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      name="gender"
                      defaultValue={personal.gender}
                      onChange={personalDetailChange}
                      required
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      defaultValue={personal.password}
                      onChange={personalDetailChange}
                      required
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      defaultValue={personal.password}
                      onChange={personalDetailChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactNumber"
                      name="contactNumber"
                      defaultValue={personal.contactNumber}
                      onChange={personalDetailChange}
                      required
                      minLength={10}
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="col">
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

              <div className="row"></div>

              <div className="form-group text-center p-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <button onClick={() => setCurrentTab("address")}>Next</button>
        </Tab>

        <Tab eventKey="address" title="Address">
          <input type="text"></input>

          <button onClick={() => setCurrentTab("personal")}>Prev</button>
          <button onClick={() => setCurrentTab("experience")}>Next</button>
        </Tab>

        <Tab eventKey="education" title="Education">
          
        <div className="container bg-white mt-5 p-sm-1 p-md-4 p-lg-5 mb-5">
            <div className="row text-center ">
              <h2 className="text-primary p-2 mb-4 display-6"> SSC Education Details </h2>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="schoolName">School Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="schoolName"
                      name="schoolName"
                      defaultValue={sscEducation.schoolName}
                      onChange={sscEducationChange}
                      required
                      autoFocus
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="boardName">Board Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="boardName"
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
                        <label htmlFor="percentage">Percentage </label>
                        <input
                        type="text"
                        className="form-control"
                        id="percentage"
                        name="percentage"
                        defaultValue={sscEducation.percentage}
                        onChange={sscEducationChange}
                        required
                        />
                    </div>
                    </div>

                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="passingYear">passingYear</label>
                        <input
                        type="text"
                        className="form-control"
                        id="passingYear"
                        name="passingYear"
                        defaultValue={sscEducation.passingYear}
                        onChange={sscEducationChange}
                        required
                        />
                    </div>
                    </div>

              </div>


              <div className="row text-center ">
              <h2 className="text-primary p-2 mb-4 display-6 "> HSC Education Details </h2>
            </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="schoolName">School Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="schoolName"
                      name="schoolName"
                      defaultValue={hscEducation.schoolName}
                      onChange={hscEducationChange}
                      required
                      autoFocus
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="boardName">Board Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="boardName"
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
                    <label htmlFor="boardName">Stream</label>
                    <input
                      type="text"
                      className="form-control"
                      id="stream"
                      name="stream"
                      defaultValue={hscEducation.stream}
                      onChange={hscEducationChange}
                      required
                    />
                  </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="percentage">Percentage </label>
                        <input
                        type="text"
                        className="form-control"
                        id="percentage"
                        name="percentage"
                        defaultValue={hscEducation.percentage}
                        onChange={hscEducationChange}
                        required
                        />
                    </div>
                    </div>

                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="passingYear">passingYear</label>
                        <input
                        type="text"
                        className="form-control"
                        id="passingYear"
                        name="passingYear"
                        defaultValue={hscEducation.passingYear}
                        onChange={hscEducationChange}
                        required
                        />
                    </div>
                    </div>

              </div>



              <div className="row text-center ">
              <h2 className="text-primary p-2 mb-4 display-6"> Graduation Education Details </h2>
            </div>

            <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="collegeName">College Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="collegeName"
                      name="collegeName"
                      defaultValue={graduationEducation.collegeName}
                      onChange={graduationEducationChange}
                      required
                      autoFocus
                    />
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="universityName">University Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="universityName"
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
                    <label htmlFor="specialization">Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      name="specialization"
                      defaultValue={graduationEducation.specialization}
                      onChange={graduationEducationChange}
                      required
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input
                      type="number"
                      className="form-control"
                      id="duration"
                      name="duration"
                      defaultValue={graduationEducation.duration}
                      onChange={graduationEducationChange}
                      required
                    />
                  </div>
                </div>

               
              </div>

              <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="addmissionYear">addmissionYear </label>
                        <input
                        type="text"
                        className="form-control"
                        id="addmissionYear"
                        name="addmissionYear"
                        defaultValue={graduationEducation.addmissionYear}
                        onChange={graduationEducationChange}
                        required
                        />
                    </div>
                    </div>

                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="passingYear">passingYear</label>
                        <input
                        type="text"
                        className="form-control"
                        id="passingYear"
                        name="passingYear"
                        defaultValue={graduationEducation.passingYear}
                        onChange={graduationEducationChange}
                        required
                        />
                    </div>
                    </div>

              </div>

              <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="attempts">attempts </label>
                        <input
                        type="number"
                        className="form-control"
                        id="attempts"
                        name="attempts"
                        defaultValue={graduationEducation.attempts}
                        onChange={graduationEducationChange}
                        required
                        />
                    </div>
                    </div>

                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="backlogs">backlogs</label>
                        <input
                        type="number"
                        className="form-control"
                        id="backlogs"
                        name="backlogs"
                        defaultValue={graduationEducation.backlogs}
                        onChange={graduationEducationChange}
                        required
                        />
                    </div>
                    </div>

              </div>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group">
                        <label htmlFor="percentage">percentage </label>
                        <input
                        type="text"
                        className="form-control"
                        id="percentage"
                        name="percentage"
                        defaultValue={graduationEducation.percentage}
                        onChange={graduationEducationChange}
                        required
                        
                        />
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
          <button onClick={() => setCurrentTab("address")}>Prev</button>
          <button onClick={() => setCurrentTab("experience")}>Next</button>
        </Tab>

        <Tab eventKey="experience" title="Experience">
          <input type="text"></input>
          <button onClick={() => setCurrentTab("education")}>Prev</button>
        </Tab>

        <Tab eventKey="other" title="Other Details">
          <input type="text"></input>
          <button onClick={() => setCurrentTab("education")}>Prev</button>
        </Tab>
      </Tabs>
    </div>
  );
}

export default RegisterJobSeeker;
