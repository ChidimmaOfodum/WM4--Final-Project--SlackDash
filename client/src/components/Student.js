import "./Students.css";

const Student = ( { students } ) => {

	return (
			<tbody>{students.map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td><img src={student.image_32} alt={student.real_name} className="student-img" /></td>
					<td>{student.real_name}</td>
					<td>{student.most_active_channel}</td>
					<td>{student.last_message}</td>
					<td>{student.total_messages}</td>
				</tr>
			))}
		</tbody>
	);

};

export default Student;
