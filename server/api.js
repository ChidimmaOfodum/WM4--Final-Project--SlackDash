import { Router } from "express";
import logger from "./utils/logger";

const router = Router();

router.get("/messages", async(req, res) => {
	const { members } = await channelMembers();



router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
