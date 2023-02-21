import React, { useState, useEffect } from 'react';
import MainNav from '../Components/LoginPage/MainNav';
import LoginForm from '../Components/LoginPage/LoginForm';

function Login() {
  return (
    <div className='loginPage'>
      <MainNav />
      <div className='LoginLogo'>
          <p>Login</p>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login;
