import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

const StudentSearch = ({ handleShow }) => {
	return (
		<div className="search-sort-buttons">
			{/* <input className="student-search" type="text" placeholder="&#61442;" /> */}
			<BsSortDown />
			{/* <BsSortUpAlt /> */}
			<span>
				Add a channel <BsPlusLg onClick={handleShow} />
			</span>
		</div>
	);
};

export default StudentSearch;
