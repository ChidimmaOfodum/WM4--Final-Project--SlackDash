import { useState, useEffect } from "react";
import Student from "./Student";

const StudentTable = () => {
	const [loading, setLoading] = useState(true);
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch("/api/data")
			.then((res) => res.json())
			.then((data) => setStudents(data))
			.then(() => setLoading(false))
			.catch((err) => console.log(err));
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th>Total Messages</th>
					<th>Total Calls</th>
					<th>Time of Last Message</th>
				</tr>
			</thead>
			{loading ? <>Loading...</> : <Student students={students} />}
		</table>
	);
};

export default StudentTable;
