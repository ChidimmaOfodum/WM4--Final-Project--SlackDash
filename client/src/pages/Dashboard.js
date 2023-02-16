import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import { BsFilterSquare } from "react-icons/bs";
import BarChart from "../Components/Bar";
import PieChart from "../Components/pie";

Chart.register(...registerables);
// import { useState } from "react";

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
		<div>
			<div>
				<BsFilterSquare size ={50} onClick = {pieOrBar}></BsFilterSquare>
				<h2>Dashboard</h2>
				<div></div>
			</div>
			{isBar? <BarChart channels={channels} /> : <PieChart channels = {channels} />}
		</div>
	);
};

export default Dashboard;
