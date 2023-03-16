import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const TraineeFooter = () => {
	const refresh = () => {
		window.location.reload();
	};

	return (
		<footer className="trainee-footer">
			<button className="homebtn-wrapper" onClick={refresh}>
				<FiRefreshCw size={40} color={"red"}></FiRefreshCw>
			</button>
		</footer>
	);
};

export default TraineeFooter;
