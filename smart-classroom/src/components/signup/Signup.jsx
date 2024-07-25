import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginNavigation = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  const handleSignup = (event) => {
    event.preventDefault();

    if (fullName === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
      toast.error('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Here you would typically handle signup logic
    // For now, we just navigate to the home page
    toast.success('Signup successful');
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">
          Signup <span className="highlight">S-Classroom</span>
        </h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <a href="#" className="link" onClick={handleLoginNavigation}>
            Already have an account?
          </a>
          <div className="form-group">
            <button type="submit" className="btn">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
