import React from 'react';
import { FaBars } from 'react-icons/fa';
import CYFLogo from './CYFLogo';
import "../../pages/Login.css";
import "../../pages/SignUp.css";

function MainNav() {
  return (
    <div className='NavBar'>
     <CYFLogo />
     <button className='hamburgerMenu'>
     <FaBars  />
     </button>
    </div>
  )
}

export default MainNav
