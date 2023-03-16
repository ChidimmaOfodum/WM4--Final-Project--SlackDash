import getSlackClient from "./slackClient";
import db from "./db";
const client = getSlackClient();

//get all members in a given channel
export async function getChannelMembers(channelID) {
	try {
		return await client.conversations.members({
			channel: channelID,
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

export async function getChannelData(channelID, oldest, latest) {
	try {
		return await client.conversations.history({
			token: process.env.TOKEN,
			channel: channelID,
			oldest: oldest,
			latest: latest
		});
	} catch(error){
		console.log(error);
	}
}

//return all replies of a channel for a given thread_ts

export async function getReplies(channelId, thread_ts) {
	try {
		return await client.conversations.replies({
			token: process.env.TOKEN,
			channel: channelId,
			ts: thread_ts,
		});
	} catch (error) {
		console.log(error);
	}
}



// accept a student ID and give me total messages in each channel 
		
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

export async function joinChannel(channelId) {
	try {
		return await client.conversations.join({
			token: process.env.TOKEN,
			channel: channelId
		});
	} catch (error) {
		console.log(error);
	}
}


export async function getUsersByEmail(email) {
	try {
		return await client.users.lookupByEmail({ 
        token: process.env.TOKEN,
        email: email
    });
		} catch (error) {
		console.log(error);
	}
}