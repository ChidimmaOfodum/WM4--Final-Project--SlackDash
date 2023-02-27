import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const StudentSearch = ({}) => {
	return (
		<div className="search-sort-buttons">
			<section className="week-of">
				<GrFormPrevious />
				<p>Week of: dategoeshere</p>
				<GrFormNext />
			</section>
			<BsSortDown />
			{/* <BsSortUpAlt /> */}
		</div>
	);
};

export default StudentSearch;
