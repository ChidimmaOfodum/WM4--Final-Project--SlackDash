import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
				<br />
				<Link to="/students/table/view">Student Table View</Link>
				<div>
				<Link to = "/dashboard">Dashboard</Link>
				</div>
				<div>
				<Link to = "/login">Login to your account</Link>
				</div>
				<div>
				<Link to = "/signup">Create a new account</Link>
				</div>
				<Link to="/landingpage">Landing Page</Link>
			</div>
		</main>
	);
}

export default Home;
