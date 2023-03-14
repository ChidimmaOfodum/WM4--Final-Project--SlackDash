import { useState, useEffect } from "react";
import Loader from "./Loader";
import DefaultMsg from "./DefaultMsg";
import { Link } from "react-router-dom";
import PaginationBtns from "./PaginationBtns";
import "./Students.css";

const StudentTable = ({ students, defaultMessage, loading, dateRange }) => {
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
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Total Messages</th>
							<th>Total Calls</th>
							<th>Time of Last Message</th>
						</tr>
					</thead>
					<tbody>
						{defaultMessage ? (
							<DefaultMsg />
						) : loading ? (
							<Loader />
						) : (
							students.slice(startIndex, startIndex + 10).map((student, i) => (
								<tr className="student-table-view" key={i}>
									<td>
										<img
											src={student.user.profile.image_32}
											alt={student.user.real_name}
											className="student-img"
										/>
									</td>
									<td>
										<Link
											to="/dashboard"
											state={{ studentid: student.user.id, dateRange: dateRange }}
											className="profile-link"
										>
											{student.user.real_name}
										</Link>
									</td>
									<td>{student.messages.length + student.replies.length}</td>
									<td>{student.totalCalls}</td>
									<td>
										{student.messages.length === 0
											? "Nill"
											: epochConversion(student.messages[0].ts)}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			<PaginationBtns
				defaultMessage={defaultMessage}
				loading={loading}
				students={students}
				startIndex={startIndex}
				setStartIndex={setStartIndex}
			/>
		</>
	);
};

export default StudentTable;
