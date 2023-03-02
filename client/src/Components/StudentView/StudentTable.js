import { useState, useEffect } from "react";
import PaginationBtns from "./PaginationBtns";
import './Students.css'

const StudentTable = ({students, loading}) => {
	//const [loading, setLoading] = useState(true);
	//const [students, setStudents] = useState([]);
	const [startIndex, setStartIndex] = useState(0);
	
	const epochConversion = (epochTime) => {
		const options = {
			weekday: "short",
			year: "numeric",
			month: "short",
			day: "numeric",
		};
		const dOLM = new Date(epochTime * 1000);
		return (
			`${dOLM.toLocaleDateString("en-GB", options)}, ${dOLM.toLocaleTimeString(
				[],
				{ hour: "2-digit", minute: "2-digit" }
			)}` || "Nill"
		);
	};
	return (
		<>
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
			{loading ? <>Loading... </> :
				(<tbody>
					{students.slice(startIndex, startIndex + 2).map((student, i) => (
						<tr className="student-table-view" key={i}>
							<td>
								<img
									src={student.user.profile.image_32}
									alt={student.user.real_name}
									className="student-img"
								/>
							</td>
							<td>{student.user.real_name}</td>
							<td>{student.messages.length + student.replies.length}</td>
							<td>{student.totalCalls}</td>
							<td>
								{student.messages.length === 0
									? "Nill"
									: epochConversion(student.messages[0].ts)}
							</td>
						</tr>
					))}
				</tbody>)
				}
			</table>
			<PaginationBtns
				students={students}
				startIndex={startIndex}
				setStartIndex={setStartIndex}
			/>
		</>
	);
};

export default StudentTable;
