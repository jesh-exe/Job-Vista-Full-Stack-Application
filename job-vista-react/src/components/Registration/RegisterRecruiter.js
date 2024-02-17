import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import RecruiterService from '../../service/RecruiterService';
import { toast } from "react-toastify";


const RegisterRecruiter = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  //To Hold State of the whole form information
  const [recruiter, setRecruiter] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    companyName: '',
    companyContact: '',
    companyAddr: '',
    companyUrl: '',
    companyFax: '',
    companyDesc: ''
  });

  //To set Image uploaded by the User
  const [logo, setLogo] = useState({
    companyLogo: null
  })

  //Setting the parameters automatically from the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecruiter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //Setting the state whenever the file is selected by user
  const handleLogoChange = (e) => {
    //Fetching the First File
    const file = e.target.files[0];

    if (file) {
      var fileType = new String(file.type);
      //To Check if File Type is of Image else Show error message
      if (!fileType.startsWith("image")) {
        toast.warn("Select Image File Only")
        setLogo({
          companyLogo: null
        });
        return;
      }

      var fileSize = file.size / 1024;
      //Checking the File Size to be of Atmost of 1 MB
      if (fileSize > 1024) {
        toast.warn('File size must be below 1MB!')
        setLogo({
          companyLogo: null
        });
        return;
      }
      // After all checks, setting the image
      setLogo({
        companyLogo: file
      });
    }
    else {
      setLogo({
        companyLogo: null
      });
    }
  };

  //Handle Register Recruiter Recruiter
  const handleSubmit = (e) => {
    e.preventDefault();

    //To Check if the Number contians 0 at the front
    if (recruiter.companyContact.length != 10) {
      toast.warn("Contact Number must have 10 digits only")
      return;
    }
    //To Check whether the file was uploaded properly
    if (!logo.companyLogo) {
      toast.warn("Select Image below Size 1MB")
      return;
    }

    //Creating the Formdata of image to send to the Backend
    const formdata = new FormData();
    formdata.append("companyLogo", logo.companyLogo);
    console.log(recruiter);

    //Posting the Data to backend, returns the ID of created Recruiter and using that ID to send another call to API to save image for that Recruiter
    RecruiterService.registerRecruiter(recruiter, formdata)
      .then((response) => {
        //Storing the Recruiter ID created in a var, to send it to backend for persisting the Logo
        var registeredRecruiterID = response.data;

        //  Sending the data with Image to backend
        RecruiterService.uploadCompanyLogo(registeredRecruiterID, formdata)
          .then((response) => {
            // If Success, then Show the message and Navigate User to the Homepage for Login
            toast.success("Registered Successfully");
            navigate("/");
          }).catch((error) => {
            //Else Show that Image was not uploaded on the server
            toast.error("Failed To Upload the Image");
          })
      })
      .catch((error) => {
        //If Error in First Axios Call, then check the error message whether Backend is listening or not.
        console.log(error)
        if (error.message === "Network Error") {
          toast.error("Server Not Started/Failed")
        }
        //Second Case to check if the Status code is 400 (BAD_REQUEST) comming from Backend which shows Constraint Violation in this case.
        if (error.response.status === 400)
          //Fetching the Message from the Response Body and Showing to the User via Alert
          toast.error(error.response.data.message);
      })
  };


  return (
    <div className="container bg-white mt-5 p-sm-1 p-md-4 p-lg-5 mb-5">

      <div className="row text-center ">
        <h2 className="text-primary p-2 mb-4 display-6"> Register as Recruiter </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="firstName">First Name<span className='text-danger'> *</span></label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                pattern='[a-zA-Z]{2,40}'
                defaultValue={recruiter.firstName}
                onChange={handleChange}
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
                pattern='[a-zA-Z]{2,40}'
                defaultValue={recruiter.middleName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                pattern='[a-zA-Z]{2,40}'
                defaultValue={recruiter.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="username">Username<span className='text-danger'> *</span></label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                pattern='[a-zA-Z0-9_]{2,40}'
                defaultValue={recruiter.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">Email<span className='text-danger'> *</span></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                defaultValue={recruiter.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="password">Password<span className='text-danger'> *</span></label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\s])(?=.*[\S])[^\s]{8,}$"
                title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and no spaces"
                defaultValue={recruiter.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="companyName">Company Name<span className='text-danger'> *</span></label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                pattern='[a-zA-Z0-9 ]{2,40}'
                defaultValue={recruiter.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="companyContact">Company Contact<span className='text-danger'> *</span></label>
              <input
                type="number"
                className="form-control"
                id="companyContact"
                name="companyContact"
                defaultValue={recruiter.companyContact}
                onChange={handleChange}
                min={1000000000}
                max={9999999999}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="companyAddr">Company Address<span className='text-danger'> *</span></label>
              <input
                type='text'
                className="form-control"
                id="companyAddr"
                name="companyAddr"
                defaultValue={recruiter.companyAddr}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="companyUrl">Company URL<span className='text-danger'> *</span></label>
              <input
                type="text"
                className="form-control"
                id="companyUrl"
                name="companyUrl"
                defaultValue={recruiter.companyUrl}
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="col">
            <div className="form-group">
              <label htmlFor="companyFax">Company Fax</label>
              <input
                type="number"
                className="form-control"
                id="companyFax"
                name="companyFax"
                defaultValue={recruiter.companyFax}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group ">
              <label htmlFor="companyLogo">Company Logo<span className='text-danger'> *</span></label>
              <input
                type="file"
                className="form-control p-2"
                id="companyLogo"
                name="companyLogo"
                onChange={handleLogoChange}
                accept="image/*"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="companyDesc">Company Description<span className='text-danger'> *</span></label>
          <textarea
            className="form-control"
            id="companyDesc"
            name="companyDesc"
            defaultValue={recruiter.companyDesc}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group text-center p-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>


    </div>
  );
};

export default RegisterRecruiter;
