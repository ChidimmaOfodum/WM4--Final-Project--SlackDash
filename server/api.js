import { Router } from "express";
import logger from "./utils/logger";
import getMessages from "./Controllers/getMessages";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/messages", getMessages);


export default router;
