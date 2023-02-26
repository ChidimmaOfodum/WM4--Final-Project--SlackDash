import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import {BsPlusLg} from 'react-icons/bs'

const StudentSearch = ({handleShow}) => {

	return (
		<div className="search-sort-buttons">
			<BsSortDown />
			{/* <BsSortUpAlt /> */}
			<span>Add a channel <BsPlusLg onClick={handleShow}/></span>
		</div>
	);
};

export default StudentSearch;