import { Router } from "express";
import logger from "./utils/logger";
import getDataPerChannel from "./Controllers/getDataPerChannel";
import postChannel from "./Controllers/postChannel";
import getChannels from "./Controllers/getChannels";

const router = Router();
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/data", getDataPerChannel);
router.get("/channels", getChannels)
router.post("/channel", postChannel )

export default router;
