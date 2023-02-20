import { useState } from "react";
import Student from "./Student";
import fakeData from "../../fake-data";


const StudentTable = () => {
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
