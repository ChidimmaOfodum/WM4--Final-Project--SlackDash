import React, { useState, useEffect } from 'react';
import "./Students.css";

const Student = ( { students } ) => {
	const [startIndex, setStartIndex] = useState(0);

	const epochConversion = (epochTime) => {
		const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
		const dOLM = new Date(epochTime * 1000);
		return `${dOLM.toLocaleDateString("en-GB", options)}, ${dOLM.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` || "Nill";
	};

	const nexthandleClick = () => {
		if (startIndex < (Object.keys(students).length - 3)) {
			setStartIndex((prevStartIndex) => prevStartIndex + 2);
		}
	  };

	const prevhandleClick = () => {
		if (startIndex > 0) {
			setStartIndex((prevStartIndex) => prevStartIndex - 2);
		}
	  };

	// slice method, cuts the list, which startIndex is flexible by user interaction
	// Since we have small amount of students, I set each page to show only, we can change later   
	return (
			<tbody>{students.slice(startIndex, startIndex + 2).map((student, i) => (
				<tr className="student-table-view" key={i}>
					<td><img src={student.user.profile.image_32} alt={student.user.real_name} className="student-img" /></td>
					<td>{student.user.real_name}</td>
					<td>{student.messages.length}</td>
					<td>{student.totalCalls}</td>
					<td>{student.messages.length === 0 ? "Nill": epochConversion(student.messages[0].ts)}</td>
				</tr>
			))}
			{ 
            (<tr>
             <td colSpan="5">
             <button onClick={nexthandleClick}>Next</button>
             <button onClick={prevhandleClick}>Previous</button>
             </td>
            </tr>
			)}
		</tbody>
	);
};

export default Student;
