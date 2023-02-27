import getSlackClient from "./slackClient";
const client = getSlackClient();

//get all members in a given channel
export async function getChannelMembers() {
	try {
		return await client.conversations.members({
			channel: process.env.CHANNEL_ID,
			token: process.env.TOKEN,
		});
	} catch (error) {
		console.error(error);
	}
}

//Given a userId, this function returns detailed info of the user.
export async function getUserInfo(userId) {
	try {
		return await client.users.info({
			token: process.env.TOKEN,
			user: userId,
		});
	} catch (error) {
		console.error(error);
	}
}

//returns all messages in a particular channel

export async function getChannelData(channelID) {
	try {
		return await client.conversations.history({
			token: process.env.TOKEN,
			channel: channelID,
			oldest: 1676377207.351409,
		});
	} catch(error){
		console.log(error);
	}
}

//gets all channel in a workspace

export async function getAllChannels() {
	try {
		return await client.conversations.list({
			token: process.env.TOKEN,
		});
	} catch (error) {
		console.log(error);
	}
}
