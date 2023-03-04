import { Router } from "express";
import logger from "./utils/logger";
import getDataPerChannel from "./Controllers/getDataPerChannel";
import db from "./db"
import aggregate from "./Controllers/getStudentProfileData";
import getData from "./Controllers/getData";
import getStudentProfileData from "./Controllers/getStudentProfileData";
import addChannel from "./Controllers/addChannel";
import getChannels from "./Controllers/getChannels";

const router = Router();
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data/:channel", getDataPerChannel);
router.get("/channels", getChannels)
router.post("/channel", addChannel )

router.get("/test", aggregate)


router.get("/studentProfileData/:id", getStudentProfileData)

router.get("/channels", async(_, res) => {
	let data = await db.query(`SELECT * FROM public.channel`)
	data = data.rows.map((el) => el.channel_name)
	res.json(data)
})

export default router;
