import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import { BsFilterSquare, BsTelephoneFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { AiTwotoneHome } from "react-icons/ai";

import BarChart from "../Components/Bar";
import PieChart from "../Components/pie";
import "./Dashboard.css";
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
				<BsFilterSquare size={50} onClick={pieOrBar}></BsFilterSquare>
				<h2>Dashboard</h2>
				<div></div>
			</div>
			<h2 className="weekly">Weekly Overview</h2>
			<div className="chart">
				{isBar ? (
					<BarChart channels={channels} />
				) : (
					<PieChart channels={channels} />
				)}
			</div>
			<div className="msg-stats">
				<TiMessages className="color" size={90} color = {"green"} />
				<BsTelephoneFill size = {80} color = {"#28cef4"} />
			</div>
			<footer>
				<div className="homebtn-wrapper">
				{/* <RiHome8Line size={50}></RiHome8Line> */}
				<AiTwotoneHome size = {40} color = {"red"}></AiTwotoneHome>
				</div>
			</footer>
		</div>
	);
};

export default Dashboard;
