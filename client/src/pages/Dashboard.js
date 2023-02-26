import { useState } from "react";
import { Chart, registerables } from "chart.js";
import "./Dashboard.css";
import Nav from "../Components/Nav/Nav";
import NavOld from "../Components/Dashboard/NavOld";
import Title from "../Components/Dashboard/Title";
import BarChart from "../Components/Dashboard/Bar";
import PieChart from "../Components/Dashboard/Pie";
import MsgStats from "../Components/Dashboard/MsgStats";
import Footer from "../Components/Footer/Footer";
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
		<>
		<Nav />
		<div className="Dashboard">
			<NavOld onClick={pieOrBar} />
			<Title />
			{isBar ? (<BarChart channels={channels} />) : (<PieChart channels={channels} />)}
			<MsgStats />
		</div>
		<Footer />
		</>
	);
};

export default Dashboard;
