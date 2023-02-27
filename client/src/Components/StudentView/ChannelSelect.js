import { useState, useEffect} from "react";

const ChannelSelect = ({channelName}) => {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		fetch("/api/channels")
		.then((res) => res.json())
		.then((data) => setChannels(data))
		.catch(err => console.log(err))
	}, [channelName])
	

	return (
		<select name="channels" id="channels">
		{channels.map((channel, i) => <option value={i}>{channel}</option>)}
		</select>
	);
};

export default ChannelSelect;
