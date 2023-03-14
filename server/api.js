import { Router } from "express";
import logger from "./utils/logger";
import getDataPerChannel from "./Controllers/getDataPerChannel";
import db from "./db"
import getData from "./Controllers/getData";
import getStudentProfileData from "./Controllers/getStudentProfileData";
import addChannel from "./Controllers/addChannel";
import getChannels from "./Controllers/getChannels";
import loginUser from "./Controllers/loginUser";
import signUpUser from "./Controllers/signUpUser";
import findUser from "./Controllers/findUser";

const router = Router();
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/data/:channel/:oldest/:latest", getDataPerChannel);
router.get("/channels", getChannels)
router.post("/channel", addChannel )
router.post("/login", loginUser )
router.post("/signup",signUpUser )
router.post("/finduserwithemail", findUser )


router.get("/studentProfileData/:id/:oldest/:latest", getStudentProfileData)
router.get("/channels", async(_, res) => {
	let data = await db.query(`SELECT * FROM public.channel`)
	data = data.rows.map((el) => el.channel_name)
	res.json(data)
})

export default router;
