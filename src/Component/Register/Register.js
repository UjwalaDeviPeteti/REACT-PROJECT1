/*import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom'; // Correct import
import Login from '../Login/Login';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Correct usage of useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful!');
        // Redirect to the login page or any other page after successful registration
        navigate('/Login'); // Correct usage of navigate
      } else {
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
   
    <div className="container1">
      <form onSubmit={handleSubmit}>
      <br></br>
        <h2 className='lk'>User Registration</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={Register}>Register</button>
      </form>
    </div>
  );
};

export default Register;*/









import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
    Confirmpassword: '',
  });

  const [signupStatus, setSignupStatus] = useState({
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ... existing code ...

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSignupStatus({ success: true, error: null });
        console.log('User signed up successfully!');
        setFormData({
          Username: ' ',
          Email: '',
          Password: '',
          Confirmpassword: '',
        }); // Reset form on successful signup
      } else {
        setSignupStatus({ success: false, error: 'Failed to sign up. Please try again.' });
        console.error('Failed to sign up. Please try again.');
      }
    } catch (error) {
      setSignupStatus({ success: false, error: 'An error occurred during signup.' });
      console.error('An error occurred during signup:', error);
    }
  };

  return (
    <div className="lla"><marquee>ALL THE TYPE OF INSURANCES ARE AVAILABLE</marquee>
    <div className="SignUpForm-container">
      <div>
      <h2 className="signup-heading">Register</h2>

        {signupStatus.success && <p className="success-message">User registered successfully!</p>}
        {signupStatus.error && <p className="error-message">{signupStatus.error}</p>}
        {<form onSubmit={handleSubmit}>
        <label className="gf">
           Username:</label>
          <input
            type="text"
            name="Username"
            className="le"
            value={formData.Username}
            onChange={handleChange}
            required
          />
        
        <br />
        <label className="gf">
          Email:</label>
          <input
            type="email"
            name="Email"
            className="le"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        
        <br />
        <label className="gf">
          Password:</label>
          <input
            type="Password"
            name="Password"
            className="le"
            value={formData.Password}
            onChange={handleChange}
            required
          />
       
        <br />
        <label className="gf">
          Confirmpassword:</label>
          <input
            type="Password"
            name="Confirmpassword"
            className="le"
            value={formData.Confirmpassword}
            onChange={handleChange}
            required
          />
        
        <br />
        <button id="btn2" type="submit">Register</button>
        <Link id="om" to="/Login"><i class="fa-solid fa-right-to-bracket fa-shake"></i>Login</Link>
        
      </form>}
    
  
  


      </div>
    </div>
    </div>
  );
};

export default Register;