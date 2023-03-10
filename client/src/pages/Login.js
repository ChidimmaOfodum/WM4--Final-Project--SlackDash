import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginPage/LoginForm";
import SlackDashLogo from "../Components/LandingPage/SlackDashLogo.png";

function Login() {
	return (
		<>
			<Link to="/">
				<img
					src={SlackDashLogo}
					alt="SlackDash"
					className="slackdash-logo-sm"
				/>
			</Link>
			<main className="login-page">
				<div className="login-header">
					<h1>Login</h1>
				</div>
				<LoginForm />
			</main>
		</>
	);
}

export default Login;
