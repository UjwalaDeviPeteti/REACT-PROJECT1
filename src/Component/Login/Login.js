/*import './Login.css';
import { Link ,Route,Routes} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
function Login(){
    return(
        <>
          <br></br> <br></br> <br></br> <br></br> <br></br> 
        <div className="wrapper">

        <div className="login-box">
          <form action="">
          
            <h2>Login</h2>
      
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required/>
              <label>Email</label>
            </div>
      
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required/>
              <label>Password</label>
            </div>
      
            <div className="remember-forgot">
              <label><input type="checkbox"/> Remember me</label>
              <Link  to="/Home">Forgot Password?</Link>
            </div>
      
            <button type="submit">Login</button>
      
            <div className="register-link">
              <p>Don't have an account? <Link to="/About">Register</Link></p>
            </div>
          </form>
        </div>
       
      
      </div>
      <Routes>
        <Route exact path='/Home' element={<Home/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        </Routes>
        </>
    )
}
export default Login*/


// Login.js
/*import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory(); // Using useHistory instead of useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Login successful!');
        // Redirect to a dashboard or home page after successful login
        history.push('/home'); // Using history.push to navigate
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <br></br>
        <h2 className="lk">User Login</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
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

        <button type="submit">Login</button>
      </form>

      <p className="mo">
        Don't have an account? <Link id="tr" to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;*/










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    Email: '',
    Password: '',
  });

  const [loginStatus, setLoginStatus] = useState({
    success: false,
    error: null,
  });

  const navigate = useNavigate(); // Hook to get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        setLoginStatus({ success: true, error: null });
        console.log('User logged in successfully!');
        alert("user logged in");
        // Reset form on successful login
        setLoginData({
          Email: '',
          Password: '',
        });

        
        navigate('/Home');
      } else {
        setLoginStatus({ success: false, error: 'Invalid email or password. Please try again.' });
        console.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setLoginStatus({ success: false, error: 'An error occurred during login.' });
      console.error('An error occurred during login:', error);
    }
  };

  const handleSignupClick = () => {
    navigate('/Register'); // Redirect to signup page
  };

  return (
    <div className='laa'><marquee speed="fast">ALL THE TYPE OF INSURANCES ARE AVAILABLE</marquee>
    <div className="LoginForm-container">
      <div>
      <h2 className="login-heading">Login</h2>

        {loginStatus.success && <p className="success-message">Login successful!</p>}
        {loginStatus.error && <p className="error-message">{loginStatus.error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="gf">Email:</label>
          <input
            type="email"
            name="Email"
            className="le"
            value={loginData.Email}
            onChange={handleChange}
            required
          />

          <br />
          <label className="gf">Password:</label>
          <input
            type="password"
            name="Password"
            className="le"
            value={loginData.Password}
            onChange={handleChange}
            required
          />

          <br />
          <button id="bdn"type="submit">Login</button><br></br>
          <button  id="bdn" onClick={handleSignupClick}>Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;































/*<footer>


<h3>Footer of the web page</h3>
            <div class="all">
              <div class="f">
                  <Link id="i" to="/Home"><i class="fa-solid fa-house fa-shake"></i>Home</Link>
                  <p>Pays for repair or replacement of a damaged engine. A handy add-on for those who stay in a region prone to flooding during the rains, or if you own a high-end car.</p> </div>
              <div class="f">
                   <Link id="i" to="/About"><i class="fa-solid fa-address-card fa-shake"></i>About</Link>
                   <p>Gives a daily allowance for alternate travel while your car is repaired at the garage. You can use this money to pay for cab or auto fare. </p></div>
        
              <div class="f">
                    <Link  id="i" to="/Contact"><i class="fa-duotone fa-address-book fa-shake"></i>Contact</Link>
                    <p>Covers personal belongings, such as your laptop, phone and clothes in your car. It has you covered, in case these belongings go missing from your car or get damaged in an accident.</p></div>
              <div class="f">
                    <Link  id="i" to="/Login"><i class="fa-solid fa-right-to-bracket fa-shake"></i>Login</Link>
                    <p> car insurance is easy to buy and renew online. Once you purchase our car insurance policy, we email your policy documents and also send a hard copy by post. You can then drive worry-free.</p> </div>
             </div>
             <div className="ic">
             
             <i  id="fa" class="fa-brands fa-facebook fa-shake"></i>
             <i  id="fa" class="fa-brands fa-instagram"></i>
             <i  id="fa" class="fa-brands fa-youtube"></i>
             <i  id="fa" class="fa-brands fa-telegram"></i>
             </div>
</footer>*/


