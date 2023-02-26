import React, { useState } from "react";

const PaginationBtns = ({ students, startIndex, setStartIndex }) => {
	// const [startIndex, setStartIndex] = useState(0);
	
    const nexthandleClick = (e) => {
		if (startIndex < Object.keys(students).length - 3) {
			setStartIndex((prevStartIndex) => prevStartIndex + 2);
		}
        console.log(e.target.value)
	};

	const prevhandleClick = () => {
		if (startIndex > 0) {
			setStartIndex((prevStartIndex) => prevStartIndex - 2);
		}
	};
	return (
		<div className="pagination-btns">
			<button className="btn btn-danger" onClick={nexthandleClick}>
				Next
			</button>
			<button className="btn btn-danger" onClick={prevhandleClick}>
				Previous
			</button>
		</div>
	);
};

export default PaginationBtns;
