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
			<tr>
				<th>Image</th>
				<th>Name</th>
				<th>Most active channel</th>
				<th>Days since last message</th>
				<th>Total Messages</th>
			</tr>
      <Student students={students} />
      </table>
  );
};

export default StudentTable;
