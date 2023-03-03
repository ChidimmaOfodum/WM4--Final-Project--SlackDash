import db from "../db";
import getData from "./getData";

const getDataPerChannel = async (req, res) => {
	const channelName = req.params.channel
	const { rows } = await db.query(
		`SELECT channel_id FROM public.channel WHERE channel_name = $1`,
		[channelName]
	);
	const channelId = rows[0].channel_id;
	const data = await getData(channelId);
	res.json({ data: data});
};

export default getDataPerChannel;

