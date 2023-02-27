import db from "../db";

const getChannels = async (req, res) => {
	let data = await db.query(`SELECT * FROM public.channel`);
	data = data.rows.map((el) => el.channel_name);
	res.json(data);
};

export default getChannels;
