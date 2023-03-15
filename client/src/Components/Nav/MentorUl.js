
import React from "react";
import "./Nav.css";
import Cookies from 'js-cookie';

const MentorUl = () => {
	
	const logoutHandle = () => {
		Cookies.remove('mentor');
		window.location.href = '/login';
	};

	return (

			<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
				<li className="nav-item">
					{/* <a href="#" onClick={handleShow}>Add a Cohort</a> */}
				</li>
				<li className="nav-item" id="logoutBtn" onClick={logoutHandle} > Logout </li>
			</ul>
	);
};

export default MentorUl;
