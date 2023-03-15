import { useState, useEffect, useRef } from "react";
import { startOfWeek, endOfWeek } from "date-fns";
import { getUnixTime } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
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
	const refOne = useRef(null)
		const [open, setOpen] = useState(false);


		const [range, setRange] = useState([
			{
				startDate: startOfWeek(new Date()),
				endDate: endOfWeek(new Date()),
				key: "selection",
			},
		]);

		const hideOnOutsideClick = (e) => {
			if (refOne.current && !refOne.current.contains(e.target)) {
				setOpen(false);
			}
		};


	useEffect(() => {
		document.addEventListener("click", hideOnOutsideClick, true);
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
		fetch(`/api/studentProfileData/${userSlackID}/${getUnixTime(range[0].startDate)}/${getUnixTime(range[0].endDate)}`)
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
    },[userSlackID, range])
	return (
		<div className="Dashboard">
			<Nav studentProfileImage={studentProfileImage} />
			<Title traineeName={studentName} />
			<div className="search-sort-buttons">
				<section className="calendarWrap">
					<input
						value={`${format(range[0].startDate, "dd/MM/yyy")} to ${format(
							range[0].endDate,
							"dd/MM/yyy"
						)}`}
						className="inputBox"
						onClick={() => setOpen((open) => !open)}
						readOnly
					/>

					<div ref={refOne}>
						{open && (
							<DateRangePicker
								className="calendarElement"
								date={new Date()}
								onChange={(item) => {
									setRange([item.selection]);
								}}
								editableDateInputs={true}
								moveRangeOnFirstSelection={false}
								ranges={range}
								maxDate={new Date()}
							/>
						)}
					</div>
				</section>
			</div>
			{isBar ? (
				<BarChart channels={studentStats} />
			) : (
				<PieChart channels={studentStats} />
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
