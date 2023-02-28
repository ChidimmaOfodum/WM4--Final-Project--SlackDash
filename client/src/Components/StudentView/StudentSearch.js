import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";

const StudentSearch = ({}) => {
	return (
		<div className="search-sort-buttons">
			<section className="week-of">
			   <span className="arrowsUp">{"<"}</span>
				<p>Week of: dategoeshere</p>
			    <span className="arrowsUp">{">"}</span>
			</section>
			<BsSortDown />
			{/* <BsSortUpAlt /> */}
		</div>
	);
};

export default StudentSearch;
