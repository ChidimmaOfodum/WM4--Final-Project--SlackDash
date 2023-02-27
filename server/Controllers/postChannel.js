import db from "../db";
import { getAllChannels } from "../slackMethods";

const postChannel = async (req, res) => {
	const { channels } = await getAllChannels();
	const filteredChannels = channels.filter(
		(channel) => req.body.data === channel.name
	);
	const id = filteredChannels[0].id;
	const channelName = filteredChannels[0].name;

	const query = `INSERT INTO public.channel(channel_id,       channel_name) VALUES ($1, $2);`;

	await db.query(query, [id, channelName]);
	res.send({ status: "success", data: channelName });
};

export default postChannel;
