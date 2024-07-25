import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupNavigation = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate('/signup'); // Navigate to the signup page
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation
    if (username === '' || password === '') {
      toast.error('Username and Password are required');
      return;
    }

    // Here you would typically handle authentication logic
    // For now, we just navigate to the home page
    toast.success('Signup successful');
    navigate('/');
    
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">
          Login <span className="highlight">S-Classroom</span>
        </h1>
        <form className="login-form" onSubmit={handleLogin}>
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
          <a href="#" className="link" onClick={handleSignupNavigation}>
            Don't have an account?
          </a>
          <div className="form-group">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
