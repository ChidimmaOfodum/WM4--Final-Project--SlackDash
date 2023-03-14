import { useState, useRef, useEffect } from "react";
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import { startOfWeek, endOfWeek } from "date-fns";
import { getUnixTime } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import StudentTable from "../Components/StudentView/StudentTable";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChannelSelect from "../Components/StudentView/ChannelSelect";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
let channel;

const StudentView = () => {
	//..............UseHooks............................................
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(true);
	const [defaultMessage, setDefaultMessage] = useState(true);
	const handleShow = () => setShow(true);
	const [open, setOpen] = useState(false);
	const [channelAdd, setChannelAdd] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [channelName, setChannelName] = useState(0);
	const refOne = useRef(null);
	const [students, setStudents] = useState([]);
	const [sort, setSorted] = useState(<BsSortDown />);
	const [range, setRange] = useState([
		{
			startDate: startOfWeek(new Date()),
			endDate: endOfWeek(new Date()),
			key: "selection",
		},
	]);

	useEffect(() => {
		document.addEventListener("click", hideOnOutsideClick, true);
	}, []);

	//.....................helper functions..............................................

	const handleSort = () => {
		const reversed = [...students].reverse();
		setStudents(reversed);
		setSorted(!sort);
	};

	const hideOnOutsideClick = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpen(false);
		}
	};

	const handleClose = () => {
		setShow(false);
		setErrMsg(null);
	};

	const handleChange = (e) => {
		channel = e.target.value;
	};

	const handleClick = (e) => {
		setLoading(true);
		setDefaultMessage(false);

		fetch(
			`/api/data/${channel}/${getUnixTime(range[0].startDate)}/${getUnixTime(
				range[0].endDate
			)}`
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.data) {
					setStudents(data.data);
					setErrMsg(null);
				} else {
					setErrMsg("Please select a valid channel");
				}
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const postChannel = () => {
		fetch("/api/channel/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data: channelAdd }),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.data === channelAdd) {
					setChannelName(channelAdd);
					handleClose();
				} else if (data.message) {
					setErrMsg(data.message);
				}
			});
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new channel</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Please type the channel name below</Form.Label>
							<Form.Control
								type="text"
								value={channelAdd}
								onChange={(e) => setChannelAdd(e.target.value)}
								placeholder="#channel-name"
								required
							/>
						</Form.Group>
					</Form>
					<p style={{ color: "red" }}>{errMsg}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="danger" onClick={postChannel}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
			<Header />
			<main className="student-view">
				<ChannelSelect
					channelName={channelName}
					handleClick={handleClick}
					handleShow={handleShow}
					handleChange={handleChange}
				/>
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
					{sort ? (
						<BsSortDown onClick={handleSort} />
					) : (
						<BsSortUpAlt onClick={handleSort} />
					)}
				</div>
				<p>{errMsg}</p>
				<StudentTable
					students={students}
					defaultMessage={defaultMessage}
					loading={loading}
					dateRange={{
						oldest: getUnixTime(range[0].startDate),
						latest: getUnixTime(range[0].endDate),
					}}
				/>
			</main>
			<Footer />
		</>
	);
};

export default StudentView;
