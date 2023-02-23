import "./Students.css";

const Student = ( { students } ) => {

	const epochConversion = (epochTime) => {
		const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
		const dOLM = new Date(epochTime * 1000);
		return `${dOLM.toLocaleDateString("en-GB", options)}, ${dOLM.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
	};

	return (
			<tbody>{Object.keys(students).map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td><img src={students[student][0].image_32} alt={students[student][0].name} className="student-img" /></td>
					<td>{students[student][0].name}</td>
					<td>{students[student].length}</td>
					<td>{students[student][0].totalCalls}</td>
					<td>{epochConversion(students[student][0].ts)}</td>
				</tr>
			))}
		</tbody>
	);

};

export default Student;
