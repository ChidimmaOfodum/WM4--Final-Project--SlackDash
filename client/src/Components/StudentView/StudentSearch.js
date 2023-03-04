import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";

const StudentSearch = ({prevWeekChangeHandle , nextWeekChangeHandle, updatedNextSaturday , updatedPreviousSaturday}) => {

	const epochConversion = (timestamp) => {
		const date = new Date(timestamp*1000);
		const day = date.getDate();
		const month = date.getMonth() + 1; // Note: monh values start from 0, so we add 1 to get the correct month value
		const year = date.getFullYear();
		let result = `${day}-${month}-${year}`; // Output: "4-3-2022"
		return result;
	};

	return (
		<div className="search-sort-buttons">
			<section className="week-of">
			   <span className="arrowsUp" onClick={prevWeekChangeHandle} >{"<"}</span>
				<p>{`Week between: ${epochConversion(updatedPreviousSaturday)} and ${epochConversion(updatedNextSaturday)} `}</p>
			    <span className="arrowsUp" onClick={nextWeekChangeHandle} >{">"}</span>
			</section>
			<BsSortDown />
			{/* <BsSortUpAlt /> */}
		</div>
	);
};

export default StudentSearch;
