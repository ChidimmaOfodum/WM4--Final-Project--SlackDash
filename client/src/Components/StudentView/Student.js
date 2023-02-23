import "./Students.css";

const Student = ( { students } ) => {
	return (
			<tbody>{Object.keys(students).map((student, i) => (
			<tbody>{Object.keys(students).map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td><img src={students[student][0].image_32} alt={students[student][0].name} className="student-img" /></td>
					<td>{students[student][0].name}</td>
					<td>Test</td>
					<td>{students[student].length}</td>
					<td>{students[student][0].totalCalls}</td>
				</tr>
			))}
		</tbody>
	);
};

export default Student;
