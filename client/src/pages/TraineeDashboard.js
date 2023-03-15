import { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "./Dashboard.css";
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import Nav from "../Components/Nav/Nav";
import BarChart from "../Components/Dashboard/Bar";
import PieChart from "../Components/Dashboard/Pie";
import Title from "../Components/Dashboard/Title";
import MsgStats from "../Components/Dashboard/MsgStats";
import TraineeFooter from "../Components/Footer/TraineeFooter";
Chart.register(...registerables);

const TraineeDashboard = () => {
	const [cookies, setCookie, removeCookie] = useCookies([]);
	const [isBar, setIsBar] = useState(true);
	const pieOrBar = () => {
		isBar ? setIsBar(false) : setIsBar(true);
	};
	const [studentStats, setStudentStats] = useState([]);
	const [studentName, setStudentName] = useState("");
	const [studentTotalMessgaes, setstudentTotalMessgaes] = useState(0);
	const [studentTotalCalls, setstudentTotalCalls] = useState(0);
	const [studentProfileImage, setstudentProfileImage] = useState(0);
	const [lastMessage, setLastMessage] = useState("");
	const [userSlackID,setUserSlackID] = useState("");
	useEffect(() => {
			let userPayload = cookies.trainee;
			let decodedPayload = jwtDecode(userPayload);
			const signedInUserEmail = decodedPayload.email;
			fetch(`/api/finduserwithemail`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				  },
				body: JSON.stringify({ email: signedInUserEmail })
			}).then((res)=> res.json()).then((userSlackID)=> setUserSlackID(userSlackID))
	}, []);
    useEffect(()=>{
		fetch(`/api/studentProfileData/${userSlackID}`)
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
    },[userSlackID])
	return (
		<div className="Dashboard">
			<Nav studentProfileImage={studentProfileImage} />
			<Title traineeName={studentName} />
			{isBar ? (
				<BarChart channels={studentStats} handleClick = {pieOrBar}/>
			) : (
				<PieChart channels={studentStats} handleClick = {pieOrBar} />
			)}
			<MsgStats
				totalMessages={studentTotalMessgaes}
				totalCalls={studentTotalCalls}
				lastMessage={lastMessage}
			/>
			<TraineeFooter />
		</div>
	);
};

export default TraineeDashboard;
