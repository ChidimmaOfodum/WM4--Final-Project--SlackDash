import {useState} from 'react';
import StudentTable from "../Components/StudentView/StudentTable";
import StudentSearch from "../Components/StudentView/StudentSearch";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChannelSelect from '../Components/StudentView/ChannelSelect';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PaginationBtns from '../Components/StudentView/PaginationBtns';

const StudentView = () => {
	const [show, setShow] = useState(false);
	const [channelAdd, setChannelAdd] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Cancel
				</Button>
				<Button variant="danger" onClick={handleClose}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
		<Header />
			<main className="student-view">
				<ChannelSelect />
				<StudentSearch handleShow={handleShow}/>
				<StudentTable />
			</main>
			<PaginationBtns />
			<Footer />
		</>
	);
};

export default StudentView;
