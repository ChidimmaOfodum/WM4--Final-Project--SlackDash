import { useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";

const StudentSearch = ({ students, handleSort }) => {
	const [sort, setSorted] = useState(<BsSortDown />);
	
	const handleSorted = () => {
		// setStudents([...students].reverse())
		students.reverse()
		// students.sort((a,b) => a.messages.length < b.messages.length ? -1 : 1)
		console.log(students)
		console.log('clicked!')
		setSorted(!sort)
	};

	return (
		<div className="search-sort-buttons">
			<section className="week-of">
				<span className="arrowsUp">{"<"}</span>
				<p>Week of: dategoeshere</p>
				<span className="arrowsUp">{">"}</span>
			</section>
			{sort ? <BsSortDown onClick={handleSorted} /> : <BsSortUpAlt onClick={handleSorted}/>}

		</div>
	);
};

export default StudentSearch;
