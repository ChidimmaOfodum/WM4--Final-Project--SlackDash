import React from "react";
import TraineeUl from "./TraineeUl";
import MentorUl from "./MentorUl";
import "./Nav.css";
import { CgClose } from "react-icons/cg";

const Nav = () => {
	return (
		// <nav>
		//     {window.location.pathname === "/students/table/view" ? <MentorUl /> : <TraineeUl />}
		// </nav>
		<nav className="navbar fixed-top">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="offcanvas offcanvas-end text-bg-dark"
					tabndex="-1"
					id="offcanvasDarkNavbar"
					aria-labelledby="offcanvasDarkNavbarLabel"
				>
					<div className="offcanvas-header">
						<CgClose
            type="button"
							className="btn=close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>

					<div className="offcanvas-body">
					{window.location.pathname === "/students/table/view" ? <MentorUl /> : <TraineeUl />}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
