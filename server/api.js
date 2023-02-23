import { Router } from "express";
import logger from "./utils/logger";
import getData from "./Controllers/getData";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data", getData);

export default router;
