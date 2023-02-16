import React from "react";
import { Bar } from "react-chartjs-2";


const BarChart = ({ channels }) => {
	return (
		<div>
			<Bar
				data={{
					labels: channels.map((data) => data.name),
					datasets: [
						{
							label: "Messages per channel",
							data: channels.map((data) => data.messages),
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
							text: "Number of messages from participants per channel",
						},
					},
				}}
			/>
			;
		</div>
	);
};

export default BarChart;
