import { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";

const ChannelSelect = ({
	channelName,
	handleChange,
	handleShow,
	handleClick,
}) => {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		fetch("/api/channels")
			.then((res) => res.json())
			.then((data) => setChannels(data))
			.catch((err) => console.log(err));
	}, [channelName]);

	return (
		<div className="channels-section">
			<select
				name="channels"
				id="channels"
				onChange={handleChange}
				defaultValue={"default"}
			>
				<option value={"default"} disabled>
					Select a channel
				</option>
				{channels.map((channel, i) => (
					<option value={channel} key={i}>
						{channel}
					</option>
				))}
			</select>
			<section className="view-add-btns">
				<button className="btn btn-danger" onClick={handleClick}>
					View Data
				</button>
				<button className="btn btn-danger" onClick={handleShow}>
					Add a channel <BsPlusLg />
				</button>
			</section>
		</div>
	);
};

export default ChannelSelect;
