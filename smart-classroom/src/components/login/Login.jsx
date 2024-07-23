import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignupNavigation = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">
          Login <span className="highlight">S-Classroom</span>
        </h1>
        <form className="login-form">
          <div className="form-group">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input"
            />
          </div>
          <a href="#" className="link" onClick={handleSignupNavigation}>
            Don't have an account?
          </a>
          <div className="form-group">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
