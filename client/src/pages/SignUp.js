import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../Components/SignUpPage/SignUpForm";

function SignUp() {
	return (
		<main className="SignUpPage">
			<div className="signup-header">
				<h1>Welcome</h1>
				<p className="signUpMsg">
					Already have a account?{" "}
					<strong>
						<Link to="/login">Sign in </Link>
					</strong>{" "}
				</p>
			</div>
			<SignUpForm />
		</main>
	);
}

export default SignUp;
