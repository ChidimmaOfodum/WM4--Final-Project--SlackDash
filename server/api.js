import { Router } from "express";
import logger from "./utils/logger";
import getMessages from "./Controllers/getMessages";
import getCalls from "./Controllers/getCalls";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/messages", getMessages);

router.get("/calls", getCalls);

export default router;
