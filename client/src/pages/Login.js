import React, { useState, useEffect } from 'react';
import CYFLogo from '../Components/LoginPage/CYFLogo';
import { FaBars } from 'react-icons/fa';
import "./Login.css";

function Login() {
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
    <div className='loginPage'>
      <div className='NavBar'>
      <CYFLogo />
      <button className='hamburgerMenu'>
       <FaBars  />
      </button>
      </div>
      <div className='LoginLogo'>
          <p>Login</p>
      </div>
      <div className='userDetail'>
       <form onSubmit={handleSubmit} className='loginForm' >
        <label htmlFor='email'>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} className="userInput" id='email' />
        <label htmlFor='password' >Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} className="userInput" id='password'/>
        <button type="submit" className='submitBtn' >Continue</button>
       </form>
      </div>
    </div>
  )
}

export default Login;
