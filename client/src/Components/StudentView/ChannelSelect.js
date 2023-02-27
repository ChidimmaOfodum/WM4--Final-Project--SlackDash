import { useState, useEffect} from "react";

const ChannelSelect = () => {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		fetch("/api/channels")
		.then((res) => res.json())
		.then((data) => setChannels(data))
		.catch(err => console.log(err))
	}, [])
	

	return (
		<select name="channels" id="channels">
		{channels.map((channel, i) => <option value={i}>{channel}</option>)}
		</select>
	);
};

export default ChannelSelect;
