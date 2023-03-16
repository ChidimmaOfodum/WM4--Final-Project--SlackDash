const Title = ({ traineeName }) => {
	return (
		<div className="title">
			{window.location.pathname === "/dashboard" ? (
				<h2>Hi 👋 here is {traineeName}'s weekly data</h2>
			) : (
				<h2>Hi 👋 {traineeName} here is your weekly data</h2>
			)}
		</div>
	);
};

export default Title;
