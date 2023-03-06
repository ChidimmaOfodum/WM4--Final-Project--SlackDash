import { useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";

const StudentSearch = ({ students, setStudents }) => {
	const [sort, setSorted] = useState(<BsSortDown />);

	const handleSort = () => {
		const reversed = [...students].reverse();
		setStudents(reversed);
		setSorted(!sort);
	};

	return (
		<div className="search-sort-buttons">
			<section className="week-of">
				<span className="arrowsUp">{"<"}</span>
				<p>Week of: dategoeshere</p>
				<span className="arrowsUp">{">"}</span>
			</section>
			{sort ? (
				<BsSortDown onClick={handleSort} className="sort" />
			) : (
				<BsSortUpAlt onClick={handleSort} className="sort" />
			)}
		</div>
	);
};

export default StudentSearch;
