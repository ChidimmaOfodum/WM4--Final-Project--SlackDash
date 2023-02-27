import { Router } from "express";
import logger from "./utils/logger";
import db from "./db"
import getData from "./Controllers/getData";
import { getAllChannels } from "./slackMethods";

const router = Router();
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data", getData);

router.get("/channels", async(req, res) => {
	let data = await db.query(`SELECT * FROM public.channel`)
	data = data.rows.map((el) => el.channel_name)
	res.json(data)
})

router.post("/channel", async(req, res) => {
	const { channels } = await getAllChannels();
	const filteredChannels = channels.filter(
		(channel) => req.body.data === channel.name
	);
	const id = filteredChannels[0].id;
	const channelName = filteredChannels[0].name;

	const query = `INSERT INTO public.channel(channel_id, channel_name)
										VALUES ($1, $2);`;

  await db.query(query, [id, channelName]);
	res.send({status:"success", data: channelName});
})
export default router;
