import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import { BsFilterSquare, BsTelephoneFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { AiTwotoneHome } from "react-icons/ai";

import BarChart from "../Components/Bar";
import PieChart from "../Components/pie";
import "./Dashboard.css";
import { Link } from "react-router-dom";
Chart.register(...registerables);

const channels = [
	{
		id: "C04P33JK30F",
		name: "general",
		messages: 50, //
		is_archived: false,
		is_general: true,
	},
	{
		id: "C04P33JK30F",
		name: "products",
		messages: 50, //
		is_archived: false,
		is_general: true,
	},

	{
		id: "C04P33JK30F",
		name: "test1",
		messages: 80, //
		is_archived: false,
		is_general: true,
	},
	{
		id: "C04PB1GS27Q",
		name: "random",
		messages: 10,
		is_channel: true,
		is_group: false,
	},
	{
		id: "C04Q7AGB5EU",
		messages: 150,
		name: "slackdash",
		is_channel: true,
		is_group: false,
	},
	{
		id: "C04Q7BGH4L8",
		name: "wm4",
		messages: 100,
		is_channel: true,
		is_group: false,
		is_im: false,
	},
	{
		id: "C04Q7BGH4L8",
		name: "wm4",
		messages: 100,
		is_channel: true,
		is_group: false,
		is_im: false,
	},
	{
		id: "C04Q7BGH4L8",
		name: "wm4",
		messages: 100,
		is_channel: true,
		is_group: false,
		is_im: false,
	},
];

const Dashboard = () => {
	const [isBar, setIsBar] = useState(true);
	const pieOrBar = () => {
		isBar ? setIsBar(false) : setIsBar(true);
	};
	return (
		<div className="Dashboard">
			<div className="nav">
				<BsFilterSquare
					className="toggle"
					size={50}
					onClick={pieOrBar}
				></BsFilterSquare>
				<h2>DASHBOARD</h2>
				<div className="profile-pics"></div>
			</div>
			<div className="title">
				<h2>Weekly Overview</h2>
			</div>
			{isBar ? (
				<BarChart channels={channels} />
			) : (
				<PieChart channels={channels} />
			)}
			<div className="msg-stats">
				<div className="icons">
					<TiMessages size={80} color={"green"} />
					<p>20</p>
				</div>
				<div className="icons">
					<BsTelephoneFill size={70} color={"#28cef4"} />
					<p>14</p>
				</div>
			</div>
			<footer>
				<Link to= "/">
				<button className="homebtn-wrapper">
					<AiTwotoneHome size={40} color={"red"}></AiTwotoneHome>
				</button>
				</Link>
			</footer>
		</div>
	);
};

export default Dashboard;
