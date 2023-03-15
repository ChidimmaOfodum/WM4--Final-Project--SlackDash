import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ channels, handleClick }) => {
  return (
		<div className="test">
			<Doughnut
				data={{
					labels: channels.map((data) => data.channelName),
					datasets: [
						{
							data: channels.map((data) => data.totalMessagesForEachChannel),
							backgroundColor: [
								"#50AF95",
								"#f3ba2f",
								"#2a71d0",
								"#9F2B68",
								"#FF0000",
							],
							borderColor: "black",
							borderWidth: 2,
						},
					],
				}}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Number of your messages per channel",
						},
					},
				}}
				onClick = {handleClick}
			/>
		</div>
	);
};

export default PieChart;

