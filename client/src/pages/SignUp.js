import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CYFLogo from '../Components/LoginPage/CYFLogo';
import { FaBars } from 'react-icons/fa';
import "./SignUp.css";

function SignUp() {
    // I have just added this click handle functions to use for future purposes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Email: ${email}, Password: ${password}`);
    };
  return (
    <div className='SignUpPage' >
      <div className='NavBar'>
       <CYFLogo />
       <button className='hamburgerMenu'>
       <FaBars  />
       </button>
      </div>
      <div className='LoginLogo'>
          <p>Welcome</p>
      </div>
      <p className='signUpMsg'>Already have a account? <strong><Link to="/login">Sign in </Link></strong> </p>
      <div className='userDetail'>
       <form onSubmit={handleSubmit} className='signUpForm' >
        <label htmlFor='firstName'>First Name</label>
        <input type="text" value={email} onChange={handleEmailChange} className="userInput" id='firstName' />
        <label htmlFor='lastName' >Last Name</label>
        <input type="text" value={email} onChange={handleEmailChange} className="userInput" id='lastName' />
        <label htmlFor='eamil' >Email</label>        
        <input type="email" value={email} onChange={handleEmailChange} className="userInput" id='email'/>
        <label htmlFor='password' >Password</label>        
        <input type="password" value={password} onChange={handlePasswordChange} className="userInput" id='password'/>
        <button type="submit" className='signUpBtn' >Continue</button>
       </form>
      </div>      
    </div>
  )
}

export default SignUp
