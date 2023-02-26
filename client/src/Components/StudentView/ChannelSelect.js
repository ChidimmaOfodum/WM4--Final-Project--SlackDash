import React from "react";

const ChannelSelect = () => {
	const channels = ["#SlackDash", "#WM4", "#Random", "#General", "#"];

	return (
		<select name="channels" id="channels">
			{channels.map((channel, i) => <option value={i}>{channel}</option>)}
		</select>
	);
};

export default ChannelSelect;
