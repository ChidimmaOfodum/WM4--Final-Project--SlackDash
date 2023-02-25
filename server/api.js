import { Router } from "express";
import logger from "./utils/logger";
import getData from "./Controllers/getData";
import getSlackClient from "./slackClient";
import {  getChannelMembers, getUserInfo } from "./slackMethods";

const router = Router();
const client = getSlackClient();
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data", getData);

router.get("/test", async (req, res) => {
	//const data = await getUserInfo("U04PWALHADP");
	let response;

	try {
		response = await client.conversations.join({
			token: process.env.TOKEN,
			channel: "C04RUN1MBR6",
		});
	} catch (error) {
		console.log(error);
	}

	res.json(response);
});


export default router;
