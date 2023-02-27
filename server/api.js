import { Router } from "express";
import logger from "./utils/logger";
import db from "./db"
import getData from "./Controllers/getData";
import postChannel from "./Controllers/postChannel";
import getChannels from "./Controllers/getChannels";

const router = Router();
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data", getData);
router.get("/channels", getChannels)
router.post("/channel", postChannel )

export default router;
