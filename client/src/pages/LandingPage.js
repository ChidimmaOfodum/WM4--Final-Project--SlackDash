import React from "react";
import SlackDashLogo from "../Components/LandingPage/SlackDashLogo.png";
import "../Components/LandingPage/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<main className="landing-main">
			<img src={SlackDashLogo} alt="SlackDash" className="slackdash-logo" />
			<div className="links">
				<Link to="/students/table/view" className="links">Student Table View</Link>
				<Link to="/dashboard" className="links">Dashboard</Link>
				<Link to="/login" className="links">Login to your account</Link>
				<Link to="/signup" className="links">Create a new account</Link>
			</div>
			<h6>
				An app for tracking trainee communication data in CYF Slack Workspace
			</h6>
			<section>
				<Link to="/login">
					<button className="btn btn-light">Login</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-light">Sign Up</button>
				</Link>
			</section>
		</main>
	);
};

export default LandingPage;
