import { useState, useEffect} from "react";

const ChannelSelect = ({channelName}) => {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		fetch("/api/channels")
		.then((res) => res.json())
		.then((data) => setChannels(data))
		.catch(err => console.log(err))
	}, [channelName])

	const handleChange = (e) => {
		const value = e.target.value
		fetch("", {
			method: "POST",
			body: value
		})
	}

	return (
		<select name="channels" id="channels" onChange={handleChange}>
			{channels.map((channel, i) => {
				return <option value={channel} key={i}>{channel}</option>;
			})}
		</select>
	);
};

export default ChannelSelect;
