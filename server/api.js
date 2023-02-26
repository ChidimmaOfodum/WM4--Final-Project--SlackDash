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
	const data = await db.query(`SELECT * FROM public.channel`)
	res.json(data)
})
export default router;
