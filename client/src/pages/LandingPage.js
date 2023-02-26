import React from "react";
import SlackDashLogo from "../Components/LandingPage/SlackDashLogo.png";
import "../Components/LandingPage/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<main className="landing-main">
			<img src={SlackDashLogo} alt="SlackDash" className="slackdash-logo" />
			<section>
				<Link to="/login">
					<button className="btn btn-danger">Login</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-danger">Sign Up</button>
				</Link>
			</section>
		</main>
	);
};

export default LandingPage;
