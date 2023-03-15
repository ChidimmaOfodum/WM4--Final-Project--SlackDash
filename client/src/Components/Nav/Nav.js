import React from "react";
import TraineeUl from "./TraineeUl";
import MentorUl from "./MentorUl";
import "./Nav.css";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({studentProfileImage}) => {
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
				>
					<RxHamburgerMenu />
				</button>

				{window.location.pathname === "/students/table/view" ? (
							<span className="site-header">DASHBOARD</span>
						) : (
							<span className="site-header">MY PROFILE</span>
						)}
				<img src={studentProfileImage} alt='profile-picture' className="profile-pic"/>

				<div
					className="offcanvas offcanvas-end text-bg-dark"
					tabndex="-1"
					id="offcanvasDarkNavbar"
					aria-labelledby="offcanvasDarkNavbarLabel">
					<div className="offcanvas-header">
						<CgClose
							type="button"
							className="btn=close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"/>
					</div>

					<div className="offcanvas-body">
						{window.location.pathname === "/mentordashboardloggedin" ? (
							<MentorUl />
						) : (
							<TraineeUl />
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
