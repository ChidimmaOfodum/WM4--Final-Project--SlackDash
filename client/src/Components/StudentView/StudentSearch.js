import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";

const StudentSearch = () => {

	return (
		<div className="search-sort-buttons">
			<input className="student-search" type="text" placeholder="&#61442;" />
			<BsSortDown />
			<BsSortUpAlt />
		</div>
	);
};

export default StudentSearch;