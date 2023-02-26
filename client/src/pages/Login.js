import React, { useState, useEffect } from 'react';
import LoginForm from '../Components/LoginPage/LoginForm';

function Login() {
  return (
    <main className='loginPage'>
      <div className='LoginLogo'>
          <h1>Login</h1>
      </div>
      <LoginForm />
    </main>
  )
}

export default Login;
