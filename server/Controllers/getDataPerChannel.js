import db from "../db";
import getData from "./getData";

const getDataPerChannel = async (req, res) => {
	try{
		const channelName = req.params.channel;
		const oldest = req.params.oldest || 0;
		const latest = req.params.latest || 0;
	
		const { rows } = await db.query(
			`SELECT channel_id FROM public.channel WHERE channel_name = $1`,
			[channelName]
		);
		const channelId = rows[0].channel_id;
		const data = await getData(channelId, oldest, latest);
		res.json({ data: data});
	}catch(err) {
		res.json({err: err.message})
	}
};

export default getDataPerChannel;

