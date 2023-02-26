import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import LoginForm from '../Components/LoginPage/LoginForm';
import SlackDashLogo from '../Components/LandingPage/SlackDashLogo.png'


function Login() {
  return (
    <>
    <Link to="/landingpage"></Link><img src={SlackDashLogo} alt="SlackDash" className="slackdash-logo"/>
    <main className='loginPage'>
      <div className='LoginLogo'>
          <h1>Login</h1>
      </div>
      <LoginForm />
    </main>
    </>
  )
}

export default Login;
