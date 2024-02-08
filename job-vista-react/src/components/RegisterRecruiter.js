import React, { useState } from 'react';

const RegisterRecruiter = () => {
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
    companyLogo: null,
    companyDesc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecruiter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setRecruiter(prevState => ({
      ...prevState,
      companyLogo: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recruiter);
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
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                defaultValue={recruiter.firstName}
                onChange={handleChange}
                required
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
                defaultValue={recruiter.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
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
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                defaultValue={recruiter.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col">

            <div className="form-group">
              <label htmlFor="companyContact">Company Contact</label>
              <input
                type="text"
                className="form-control"
                id="companyContact"
                name="companyContact"
                defaultValue={recruiter.companyContact}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="companyAddr">Company Address</label>
              <textarea
                className="form-control"
                id="companyAddr"
                name="companyAddr"
                defaultValue={recruiter.companyAddr}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="companyUrl">Company URL</label>
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
                type="text"
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
              <label htmlFor="companyLogo">Company Logo</label>
              <input
                type="file"
                className="form-control-file p-2"
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
          <label htmlFor="companyDesc">Company Description</label>
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
