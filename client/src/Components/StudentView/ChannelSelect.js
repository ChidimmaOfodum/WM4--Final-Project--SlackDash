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
		const data = { data: value};

		fetch("https://example.com/profile", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});

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
