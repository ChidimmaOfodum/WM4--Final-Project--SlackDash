import { Router } from "express";
import logger from "./utils/logger";
import getData from "./Controllers/getData";
import {  getChannelMembers, getUserInfo } from "./slackMethods";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data", getData);

router.get("/test", async (req, res) => {
	const data = await getUserInfo("U04PWALHADP");
	res.json(data);
});

export default router;
