import { Router } from "express";
import getSlackClient from "./slackClient";
import logger from "./utils/logger";

const router = Router();
const client = getSlackClient();

// 

// Giving all channels informations
async function allChannelsInfo() {
	try {
		// Call the conversations.list method using the built-in WebClient
		return await client.conversations.list({
			// The token you used to initialize your app
			token: process.env.TOKEN,
		});
	} catch (error) {
		console.error(error);
	}
}
router.get("/channels", async(_, res) => {
	let result = await allChannelsInfo();
	res.send(result);
});

// Giving all channel member IDs
async function channelMembers() {
	try {
		// Call the conversations.list method using the built-in WebClient
		return await client.conversations.members({
			channel: process.env.CHANNEL_ID,
			// The token you used to initialize your app
			token: process.env.TOKEN,
		});
	} catch (error) {
		console.error(error);
	}
}
router.get("/channelMembers", async(_, res) => {
	let result = await channelMembers();
	res.send(result);
});

// User presence by ID
async function memberPresence(req) {
	try {
		// Call the conversations.list method using the built-in WebClient
		return await client.users.getPresence({
			token: process.env.TOKEN,
			user: req.params.id,
			// The token you used to initialize your app
		});
	} catch (error) {
		console.error(error);
	}
}
router.get("/memberPresence/:id", async(req, res) => {
	let result = await memberPresence(req);
	res.send(result);
});

// History of conversation in a channel, it shows who involved the chat
async function channelConversationHistory() {
	try {
		// Call the conversations.list method using the built-in WebClient
		return await client.conversations.history({
			token: process.env.TOKEN,
			channel: process.env.CHANNEL_ID,
			//user: req.params.id,
			// The token you used to initialize your app
		});
	} catch (error) {
		console.error(error);
	}
}
router.get("/conversations/channel/:id", async(req, res) => {
	let result = await channelConversationHistory(req);
	res.send(result);
});

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
