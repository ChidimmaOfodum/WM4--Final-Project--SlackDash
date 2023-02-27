import { Router } from "express";
import logger from "./utils/logger";
import db from "./db"
import getData from "./Controllers/getData";

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
	const query = `INSERT INTO public.channel(channel_id, channel_name)
										VALUES ('C04Q7BGH4L8', 'wm4');`;
	await db.query(query);
	res.json(req.body)
})
export default router;
