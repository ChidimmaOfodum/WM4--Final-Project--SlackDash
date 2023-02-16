import React from "react";
import { Chart, registerables } from "chart.js";
import { BsFilterSquare } from "react-icons/bs";

Chart.register(...registerables);
// import { useState } from "react";
import { Bar } from "react-chartjs-2";

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
	// const [chart, setChart] = useState();
	return (
		<div>
			<div>
				<BsFilterSquare size={50}></BsFilterSquare>
				<h2>Dashboard</h2>
				<div></div>
			</div>
			<Bar
				data={{
					labels: channels.map((data) => data.name),
					datasets: [
						{
							label: "Messages per channel",
							data: channels.map((data) => data.messages),
							backgroundColor: [
								"rgba(75,192,192,1)",
								"#ecf0f1",
								"#50AF95",
								"#f3ba2f",
								"#2a71d0",
							],
							borderColor: "black",
							borderWidth: 2,
						},
					],
				}}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Number of messages from participants per channel",
						},
					},
				}}
			/>
		</div>
	);
};

export default Dashboard;
