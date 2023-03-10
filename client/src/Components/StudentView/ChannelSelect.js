import { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";

const ChannelSelect = ({channelName, handleChange, handleShow}) => {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		fetch("/api/channels")
			.then((res) => res.json())
			.then((data) => setChannels(data))
			.catch((err) => console.log(err));
	}, [channelName]);

	return (
		<div className="channels-section">
			<select name="channels" id="channels" onChange={handleChange}>
				{channels.map((channel, i) => (
					<option value={channel} key= {i}>{channel}</option>
				))}
			</select>
			<span>
				Add a channel <BsPlusLg onClick={handleShow} />
			</span>
		</div>
	);
};

export default ChannelSelect;
