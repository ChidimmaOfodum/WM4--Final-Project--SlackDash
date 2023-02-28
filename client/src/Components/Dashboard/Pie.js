import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ channels }) => {
  return (
		<div className="test">
			<Doughnut
				data={{
					labels: channels.map((data) => data.channelName),
					datasets: [
						{
							data: channels.map((data) => data.totalMessagesForEachChannel),
							backgroundColor: [
								"rgba(75,192,192,1)",
								"#ecf0f1",
								"#50AF95",
								"#f3ba2f",
								"#2a71d0",
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
			/>
		</div>
	);
};

export default PieChart;

