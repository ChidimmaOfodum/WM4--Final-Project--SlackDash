
import { useState } from "react";
import StudentTable from "../Components/StudentView/StudentTable";
import StudentSearch from "../Components/StudentView/StudentSearch";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChannelSelect from '../Components/StudentView/ChannelSelect';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const StudentView = () => {
	const [show, setShow] = useState(false);
	const [channelAdd, setChannelAdd] = useState("");
	const [students, setStudents] = useState([]);
	const [defaultMessage, setDefaultMessage] = useState(true);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [channelName, setChannelName] = useState(0);
	const [errMsg, setErrMsg] = useState("");

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

	const handleChange = (e) => {
		const channelName = e.target.value;
		fetch(`/api/data/${channelName}`)
			.then((response) => response.json())
			.then((data) => {
				setStudents(data.data);
				setDefaultMessage(false)
			})
			.catch((error) => {
				console.error("Error:", error);
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
				<ChannelSelect channelName={channelName} handleChange={handleChange} handleShow = {handleShow} />
				<StudentSearch handleShow={handleShow} />
				<StudentTable students={students} defaultMessage = {defaultMessage}/>
			</main>
			<Footer />
		</>
	);
};

export default StudentView;
