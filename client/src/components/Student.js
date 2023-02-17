
import "./Students.css";

const Student = ( { students } ) => {

	// students.map((student) => student.is_email_confirmed && !student.is_adim);

	return (

			<>{students.map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td>{i}</td>
					<td>{student.real_name}</td>
					<td>{student.most_active_channel}</td>
					<td>{student.last_message}</td>
					<td>{student.total_messages}</td>
				</tr>
			))}
		</>
	);

};

export default Student;
