import { useRef, useState } from "react";
import "../../pages/Login.css";

const LoginForm = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [err, setErr] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		fetch("api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((res) => {
				if (res.redirected) {
					window.location.href = res.url;
				} else {
					setErr("***Email or Password does not match");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={handleSubmit} className="login-form">
			<label htmlFor="email">Email</label>
			<input type="email" ref={emailRef} className="userInput" id="email" />
			<label htmlFor="password">Password</label>
			<input
				type="password"
				ref={passwordRef}
				className="userInput"
				id="password"
			/>
			<p>{err}</p>
			<button type="submit" className="btn btn-danger submit-btn">
				Continue
			</button>
		</form>
	);
};

export default LoginForm;
