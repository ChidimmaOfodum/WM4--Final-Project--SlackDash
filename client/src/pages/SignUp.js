import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../Components/SignUpPage/SignUpForm";
import SlackDashLogo from "../Components/LandingPage/SlackDashLogo.png";

function SignUp() {
	return (
		<>
			<Link to="/">
				<img
					src={SlackDashLogo}
					alt="SlackDash"
					className="slackdash-logo-sm"
				/>
			</Link>
			<main className="signup-page">
				<div className="signup-header">
					<h1>Welcome</h1>
					<p className="signUpMsg">
						Already have a account?{" "}
						<strong>
							<Link to="/login">Sign in </Link>
						</strong>{" "}
					</p>
					<SignUpForm />
				</div>
			</main>
		</>
	);
}

export default SignUp;
