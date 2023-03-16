import { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import Nav from "../Components/Nav/Nav";
import BarChart from "../Components/Dashboard/Bar";
import PieChart from "../Components/Dashboard/Pie";
import Title from "../Components/Dashboard/Title";
import MsgStats from "../Components/Dashboard/MsgStats";
import MentorFooter from "../Components/Footer/MentorFooter";
Chart.register(...registerables);

const Dashboard = () => {
	const location = useLocation();
	const { studentid, dateRange } = location.state;
	const [isBar, setIsBar] = useState(true);
	const pieOrBar = () => setIsBar(!isBar);
	const [studentStats, setStudentStats] = useState([]);
	const [studentName, setStudentName] = useState("");
	const [studentTotalMessgaes, setstudentTotalMessgaes] = useState(0);
	const [studentTotalCalls, setstudentTotalCalls] = useState(0);
	const [studentProfileImage, setstudentProfileImage] = useState(0);
	const [lastMessage, setLastMessage] = useState("");
	useEffect(() => {
		fetch(`/api/studentProfileData/${studentid}/${dateRange.oldest}/${dateRange.latest}`)
			.then((res) => res.json())
			.then((data) => {
				setStudentStats(data.messagesStatsForEachChannel);
				setStudentName(data.traineeName);
				setstudentTotalMessgaes(data.totalMessages);
				setstudentTotalCalls(data.totalCalls);
				setstudentProfileImage(data.profilePic);
				setLastMessage(data.finalTime);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
		<div className="Dashboard">
			<Nav studentProfileImage={studentProfileImage} />
			<Title traineeName={studentName} />
			{isBar ? (
				<BarChart channels={studentStats} handleClick = {pieOrBar} />
			) : (
				<PieChart channels={studentStats} handleClick = {pieOrBar} />
			)}
			<MsgStats
				totalMessages={studentTotalMessgaes}
				totalCalls={studentTotalCalls}
			/>
		</div>
		<MentorFooter/>
		</>
	);
};

export default Dashboard;
 