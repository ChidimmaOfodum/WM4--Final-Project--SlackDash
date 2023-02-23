import React, { useState, useEffect } from 'react';
import MainNav from '../Components/LoginPage/MainNav';
import { Link } from "react-router-dom";
import SignUpForm from '../Components/SignUpPage/SignUpForm';


function SignUp() {

  return (
    <div className='SignUpPage' >
      <MainNav />
      <div className='LoginLogo'>
          <p>Welcome</p>
      </div>
      <p className='signUpMsg'>Already have a account? <strong><Link to="/login">Sign in </Link></strong> </p>
      <SignUpForm />
    </div>
  )
}

export default SignUp
