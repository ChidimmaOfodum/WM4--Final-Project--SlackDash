import { useState } from "react";
import fakeData from "../../fake-data";

import "./Students.css";

const Student = () => {
	const [students, setStudents] = useState(fakeData);

	// const getStudents = () => {
	// 	fetch("/students", {
	// 		method: "GET",
	// 	})
	// 		.then((res) => res.json())
	// 		.then((users) => setStudents(users))
	// 		.catch((err) => console.log(err));
	// };

	// getStudents();

	//name and most active channel
	//number of days since last message
	//total messages

	return (
		<table>
			<tr>
				<th>Image</th>
				<th>Name</th>
				<th>Most active channel</th>
				<th>Days since last message</th>
				<th>Total Messages</th>
			</tr>
			{students.map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td>{i}</td>
					<td>{student.real_name}</td>
					<td>{student.most_active_channel}</td>
					<td>{student.last_message}</td>
					<td>{student.total_messages}</td>
				</tr>
			))}
		</table>
	);
};

export default Student;
