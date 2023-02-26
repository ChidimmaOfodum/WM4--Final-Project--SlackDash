import React, { useState } from "react";

const PaginationBtns = () => {
	const nexthandleClick = () => {
		if (startIndex < Object.keys(students).length - 3) {
			setStartIndex((prevStartIndex) => prevStartIndex + 2);
		}
	};

	const prevhandleClick = () => {
		if (startIndex > 0) {
			setStartIndex((prevStartIndex) => prevStartIndex - 2);
		}
	};
	return <div className="pagination-btns"><button className="btn btn-danger" onClick={nexthandleClick}>Next</button>
    <button className="btn btn-danger" onClick={prevhandleClick}>Previous</button></div>;
};

export default PaginationBtns;
