import React from 'react';
import '../css/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form-group checkbox">
        <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
        <label htmlFor="keepSignedIn">Keep me signed in</label>
      </div>
      <button className="login-btn">Login</button>
    </div>
  );
};

export default LoginPage;
