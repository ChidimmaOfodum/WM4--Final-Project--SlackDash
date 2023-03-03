import db from "../db";
import { getAllChannels } from "../slackMethods";

const addChannel = async (req, res) => {
	try{
		const { channels } = await getAllChannels();
		const filteredChannels = channels.filter(
			(channel) => req.body.data === channel.name
		);
		const id = filteredChannels[0].id;
		const channelName = filteredChannels[0].name;
	
		const query = `INSERT INTO public.channel(channel_id, channel_name) VALUES ($1, $2);`;
	
		await db.query(query, [id, channelName]);
		res.send({ status: "success", data: channelName });
	}catch(err){
		if (
			err.message ===
			`duplicate key value violates unique constraint "channel_pkey"`
		) {
			res.status(400).json({
				status: "failed",
				message: "channel already exists",
			});
		} else if (
			(err.message = `Cannot read properties of undefined (reading 'id')`)
		) {
			res.status(401).json({
				status: "failed",
				message: "Invalid Channel",
			});
		} else {
			res.status(500).json({
				status: "failed",
				message: "Something went wrong",
			});
		}
		 
	}
};


export default addChannel;
