import React, { useState } from "react";

const PaginationBtns = ({ students, startIndex, setStartIndex, defaultMessage, loading, errMsg }) => {
	// const [startIndex, setStartIndex] = useState(0);

	const nexthandleClick = (e) => {
		if (startIndex < Object.keys(students).length - 3) {
			setStartIndex((prevStartIndex) => prevStartIndex + 2);
		}
		console.log(e.target.value);
	};

	const prevhandleClick = () => {
		if (startIndex > 0) {
			setStartIndex((prevStartIndex) => prevStartIndex - 2);
		}
	};
	return (
		<div className={defaultMessage || loading || errMsg ? "hidden": "pagination-btns"}>
			<button className="btn btn-dark" onClick={prevhandleClick}>
				Previous
			</button>
			<button className="btn btn-dark" onClick={nexthandleClick}>
				Next
			</button>
		</div>
	);
};

export default PaginationBtns;
