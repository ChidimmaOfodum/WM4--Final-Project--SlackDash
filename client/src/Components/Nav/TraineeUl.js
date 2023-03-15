import React from "react";
import "./Nav.css";
import Cookies from 'js-cookie';

const TraineeUl = () => {

  const logoutHandle = () => {
		Cookies.remove('trainee');
		window.location.href = '/login';
	};

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li className="nav-item" id="logoutBtn" onClick={logoutHandle} >Logout</li>
    </ul>
  );
};

export default TraineeUl;
