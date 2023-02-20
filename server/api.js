import { Router } from "express";
import { getChannelMembers, getUserInfo, getChannelMessages } from "./slackMethods";
import logger from "./utils/logger";

const router = Router();

router.get("/messages", async (req, res) => {
	const { members } = await getChannelMembers();
	const membersInfo = await Promise.all(
		members.map(async (userId) => {
			return await getUserInfo(userId);
		})
	);
	//const trainees = memberInfo.filter((el) => el.user.profile.title.toLowerCase().includes("trainee"));

	let { messages } = await getChannelMessages();
	messages = messages.filter((el) => !el.subtype); //filter out bot messages
	const result = messages.map((el) => {
		const data = membersInfo.find((item) => item.user.id === el.user);
		el.name = data.user.real_name;
		return el;
	});

	res.json(result);
});

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
