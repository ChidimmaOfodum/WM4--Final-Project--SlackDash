import { useState, useEffect } from "react";
import Student from "./Student";


const StudentTable = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch("/api/messages")
		.then((res) => res.json())
		.then((data) => setStudents(data))
		.catch((err) => console.log(err));
	}, []);


  return (
    <table>
      <thead>
			<tr>
				<th>Image</th>
				<th>Name</th>
				<th>Time of Last Message</th>
				<th>Total Messages</th>
				<th>Total Calls</th>
			</tr>
      </thead>
      <Student students={students} />
      </table>
  );
};

export default StudentTable;
