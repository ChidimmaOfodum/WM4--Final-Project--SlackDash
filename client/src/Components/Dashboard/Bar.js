import React from "react";
import { Bar } from "react-chartjs-2";


const BarChart = ({ channels }) => {
	return (
		<div className="test">
			<Bar
				data={{
					labels: channels.map((data) => data.channelName),
					datasets: [
						{
							label: "Messages per channel",
							data: channels.map((data) => data.totalMessagesForEachChannel),
							backgroundColor: [
								"rgba(75,192,192,1)"
							],
							borderColor: "black",
							borderWidth: 2,
						},{
							label: "Calls per channel",
							data: channels.map((data) => data.totalCallsForEachChannel),
							backgroundColor:[
								"orange"
							],
							borderColor: "White",
							borderWidth:2,
						}
					],
				}}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Number of your messages/calls per channel",
						},
					},
					responsive: true,
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
};

export default BarChart;
