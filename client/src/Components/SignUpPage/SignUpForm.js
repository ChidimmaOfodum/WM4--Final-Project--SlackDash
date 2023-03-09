import React, { useRef, useState } from "react";
import "../../pages/SignUp.css";
import bcrypt from "bcryptjs";

const SignUpForm = () => {
	const firstName = useRef();
	const lastName = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [selected, setSelected] = useState();

	const onRadioSelect = (e) => {
		setSelected(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = emailInputRef.current.value;
		// const password = bcrypt.hashSync(passwordInputRef.current.value, 10);
		const password = passwordInputRef.current.value

		fetch("/signUp", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				firstName: firstName.current.value,
				lastName: lastName.current.value,
				email: email,
				password: password,
				traineeOrMentor: selected,
			}),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
	};

	return (
			<form onSubmit={handleSubmit} className="signup-form">
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					ref={firstName}
					className="userInput"
					id="firstName"
					name="first-name"
					required
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					ref={lastName}
					className="userInput"
					id="lastName"
					name="last-name"
					required
				/>
				<label htmlFor="eamil">Email</label>
				<input
					type="email"
					ref={emailInputRef}
					className="userInput"
					id="email"
					name="email"
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					ref={passwordInputRef}
					className="userInput"
					id="password"
					name="password"
					required
				/>

				<fieldset className="radioBtnWrapper">
					<legend>Please select your role</legend>
					<div className="radio-style-helper">
					<div className="radioBtn">
						<input
							type="radio"
							id="mentor"
							name="input"
							value="mentor"
							onChange={onRadioSelect}
						/>
						<label htmlFor="mentor">Mentor</label>
					</div>

					<div className="radioBtn">
						<input
							type="radio"
							id="trainee"
							name="input"
							value="trainee"
							onChange={onRadioSelect}
						/>
						<label htmlFor="trainee">Trainee</label>
					</div>
					</div>
				</fieldset>
				<button type="submit" className="signup-btn btn btn-danger">
					Continue
				</button>
			</form>
	);
};

export default SignUpForm;
