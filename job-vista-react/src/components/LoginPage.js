import React, { useEffect, useState } from 'react';
import '../css/LoginPage.css'
import ScrollReveal from 'scrollreveal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../redux/slices/LoginSlice';

const LoginPage = () => {

  useEffect(() => {
    ScrollReveal().reveal(".emerge", {
      scale: 0.7,
      duration: 1500
    });
  })

  const [user,setUser] = useState({});
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setLoggedInUser(user));
  }



  return (
    <div className='container mt-5 mb-5 p-4 emerge'>
      <div className='col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 text-center'>
        <div className="p-5 bg-body rounded-5 border">
          <div className='display-6 text-primary mb-5'>Welcome Back</div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" onChange={handleChange}/>
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>
            <button onClick={handleLogin} className="btn btn-outline-primary">Log Me In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
