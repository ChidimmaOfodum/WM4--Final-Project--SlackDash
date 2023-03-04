
import { useState , useEffect } from "react";
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
	const [loading, setLoading] = useState(true);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [channelName, setChannelName] = useState(0);
	const [errMsg, setErrMsg] = useState("");
    const [updatedPreviousSaturday, setUpdatedPreviousSaturday ] = useState(0);//If prev(starting day which is older) has changed by user this useState keeps track of it
    const [updatedNextSaturday, setUpdatedNextSaturday ] = useState(0);//If next(ending day which is newer) has changed by user this useState keeps track of it
	const [isPrevClicked,setIsPrevClicked] = useState(false);
	const [mountedPrev, setMountedPrev] = useState(false);
	const [isNextClicked,setIsNextClicked] = useState(false);
	const [mountedNext, setMountedNext] = useState(false);


	// Calculating the timestamps for current Sat to Sat period
	function getTimestampsOfPreviousAndNextSaturday() {
		const now = new Date(); // Get the current date and time
		const dayOfWeek = now.getUTCDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
		const saturday = new Date(now); // Create a new Date object based on the current date and time
		saturday.setUTCDate(saturday.getUTCDate() - dayOfWeek + 6); // Set the date to the next Saturday
		const nextSaturday = new Date(saturday); // Create a new Date object based on the next Saturday
		const previousSaturday = new Date(saturday); // Create a new Date object based on the next Saturday
		previousSaturday.setUTCDate(previousSaturday.getUTCDate() - 7); // Set the date to the previous Saturday
		const timestampOfPreviousSaturday = (previousSaturday.getTime())/1000; // Get the timestamp of the previous Saturday in milliseconds since epoch
		const timestampOfNextSaturday = (nextSaturday.getTime())/1000; // Get the timestamp of the next Saturday in milliseconds since epoch
		return [timestampOfPreviousSaturday, timestampOfNextSaturday];
	}
    
	// Calculating timestamp for 7 days ago
    function getTimestampOfSevenDaysAgo(timeStamp) {
			const now = timeStamp; // Get the current timestamp in milliseconds
			const sevenDaysInMs = 7 * 24 * 60 * 60 ; // Calculate 7 days in milliseconds
			const timestampOfSevenDaysAgo = now - sevenDaysInMs; // Subtract 7 days from the current timestamp
			return timestampOfSevenDaysAgo;
	}

	// Calculating timestamp for 7 later
    function getTimestampOfSevenDaysAfter(timeStamp) {
		const now = timeStamp; // Get the current timestamp in milliseconds
		const sevenDaysInMs = 7 * 24 * 60 * 60 ; // Calculate 7 days in milliseconds
		const timestampOfSevenDaysAgo = now + sevenDaysInMs; // Subtract 7 days from the current timestamp
		return timestampOfSevenDaysAgo;
	}

	// Getting data when first page is loaded
    useEffect( ()=>{
		// Find current Sat to Sat timestamps where prev is the older Sat
      	const currentWeekStamps = getTimestampsOfPreviousAndNextSaturday();	
		setUpdatedPreviousSaturday(currentWeekStamps[0]);
		setUpdatedNextSaturday(currentWeekStamps[1]);
        
		// When it loads for the first time it fetch data for general, we can change it however we want.
		let URL = `/api/data/general?oldest=${currentWeekStamps[0]}&latest=${currentWeekStamps[1]}`;
		console.log(URL);
		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				setStudents(data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},[]);

	// Handle function for  Prev button
    const prevWeekChangeHandle = (e) =>{
		setUpdatedPreviousSaturday(getTimestampOfSevenDaysAgo(updatedPreviousSaturday));
		setUpdatedNextSaturday(getTimestampOfSevenDaysAgo(updatedNextSaturday)) ;
		setIsPrevClicked(!isPrevClicked);
	};

    // Handle function for Next button
    const nextWeekChangeHandle = (e) =>{
		setUpdatedPreviousSaturday(getTimestampOfSevenDaysAfter(updatedPreviousSaturday));
		setUpdatedNextSaturday(getTimestampOfSevenDaysAfter(updatedNextSaturday)) ;
		setIsNextClicked(!isNextClicked);
	};

	// Getting data when the user update the prev week period 
    useEffect( ()=>{
		// mountedPrev is just to avoid this function runs on its first run
		if(mountedPrev && isPrevClicked){
			fetch(`/api/data/general?oldest=${updatedPreviousSaturday}&latest=${updatedNextSaturday}`)
				.then((response) => response.json())
				.then((data) => {
					setStudents(data.data);
					setLoading(false);
					console.log(`${updatedPreviousSaturday} Previous`);
					console.log(`${updatedNextSaturday} Previous`);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}else{setMountedPrev(true)}
  },[isPrevClicked]);

  	// Getting data when the user update the next week period 
    useEffect( ()=>{
		// mountedNext is just to avoid this function runs on its first run
		if(mountedNext && isNextClicked){
			fetch(`/api/data/general?oldest=${updatedPreviousSaturday}&latest=${updatedNextSaturday}`)
				.then((response) => response.json())
				.then((data) => {
					setStudents(data.data);
					setLoading(false);
					console.log(`${updatedPreviousSaturday} Next`);
					console.log(`${updatedNextSaturday} Next`);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}else{setMountedNext(true)}
  },[isNextClicked]);

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
		// It fetch the data based on current week which user has selected
		fetch(`/api/data/${channelName}?oldest=${updatedPreviousSaturday}&latest=${updatedNextSaturday}`)
			.then((response) => response.json())
			.then((data) => {
				setStudents(data.data);
				setLoading(false)
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
				<ChannelSelect channelName={channelName} handleChange={handleChange} handleShow = {handleShow}  />
				<StudentSearch handleShow={handleShow} prevWeekChangeHandle={prevWeekChangeHandle} nextWeekChangeHandle={nextWeekChangeHandle} updatedPreviousSaturday={updatedPreviousSaturday} updatedNextSaturday={updatedNextSaturday} />
				<StudentTable students={students} loading = {loading}/>
			</main>
			<Footer />
		</>
	);
};

export default StudentView;
