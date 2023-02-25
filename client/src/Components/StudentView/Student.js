import "./Students.css";

const Student = ( { students } ) => {

	const epochConversion = (epochTime) => {
		const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
		const dOLM = new Date(epochTime * 1000);
		return `${dOLM.toLocaleDateString("en-GB", options)}, ${dOLM.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` || "Nill";
	};

	return (
			<tbody>{students.map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td><img src={student.user.profile.image_32} alt={student.user.real_name} className="student-img" /></td>
					<td>{student.user.real_name}</td>
					<td>{student.messages.length}</td>
					<td>{student.totalCalls}</td>
					<td>{student.messages.length === 0 ? "Nill": epochConversion(student.messages[0].ts)}</td>
				</tr>
			))}
		</tbody>
	);
};

export default Student;
