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
			//oldest: 1676377207.351409,
		});
	} catch (error) {
		console.log(error);
	}
}



// accept a student ID and give me total messages in each channel 
		export async function studentProfileData(userId) {
			try {
				let totalMessages = 0;
				var totalCalls = 0;
				var finalTs = 0;
				let messagesStatsForEachChannel = [];
				let channelsFromDataBase = await db.query(
					`SELECT * FROM public.channel`
				);
				let channelList = channelsFromDataBase.rows;
				for (let i = 0; i < channelList.length; i++) {
					let channelDetails = channelList[i];
					var channelID = channelDetails.channel_id;
					let channelName = channelDetails.channel_name;
					var totalMessagesPerChannel = 0;
					var totalCallsForEachChannel = 0;
					const rawChannelMessages = await client.conversations.history({
						token: process.env.TOKEN,
						channel: channelID,
					});
					const channelMessages = rawChannelMessages.messages;

					// Calculating all calls
					let calls = await channelMessages.filter((call) => call.room);
					let callers = await calls
						.map((c) => c.room)
						.map((p) => p.participant_history)
						.flat();
					await callers.map(async (trainee) => {
						let isSelectedTrainee = (await trainee) === userId;
						if (isSelectedTrainee) {
							totalCalls = totalCalls + 1;
							totalCallsForEachChannel = totalCallsForEachChannel + 1;
						}
					});
					const ts = channelMessages[0].ts;
					if ((await finalTs) === 0) {
						finalTs = ts;
					}
					if ((await ts) > finalTs) {
						finalTs = ts;
					}
					for (let j = 0; j < channelMessages.length; j++) {
						let channelMessage = channelMessages[j];
						let threadTs = channelMessage.ts;
						let isSelectedTrainee = channelMessage.user === userId;
						let isBotOrNot = channelMessage.client_msg_id;
						let isThereReply = channelMessage.reply_users;
						if (isSelectedTrainee && isBotOrNot) {
							totalMessages = totalMessages + 1;
							totalMessagesPerChannel = totalMessagesPerChannel + 1;
						}
						if (isThereReply) {
							let replyThread = await client.conversations.replies({
								token: process.env.TOKEN,
								channel: channelID,
								ts: threadTs,
							});
							let replyMessages = replyThread.messages;
							for (let k = 0; k < replyMessages.length; k++) {
								let replyMessage = replyMessages[k];
								let isSelectedTrainee = replyMessage.user === userId;
								if (isSelectedTrainee) {
									totalMessages = totalMessages + 1;
									totalMessagesPerChannel = totalMessagesPerChannel + 1;
								}
							}
						}
					}
					var eachChannelStats = {
						id: channelID,
						channelName: channelName,
						totalMessagesForEachChannel: totalMessagesPerChannel,
						totalCallsForEachChannel: totalCallsForEachChannel,
					};
					messagesStatsForEachChannel.push(eachChannelStats);
				}
				// Getting each user details
				const userInfo = await getUserInfo(userId);
				const realName = await userInfo.user.real_name;
				const profilePic = await userInfo.user.profile.image_32;
				// Finding time of very last message
				const options = {
					weekday: "short",
					year: "numeric",
					month: "short",
					day: "numeric",
				};
				const dOLM = await new Date(finalTs * 1000);
				const finalTime =
					(await `${dOLM.toLocaleDateString(
						"en-GB",
						options
					)}, ${dOLM.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})}`) || "Nill";

				return {
					traineeName: realName,
					profilePic: profilePic,
					finalTime: finalTime,
					messagesStatsForEachChannel: messagesStatsForEachChannel,
					totalMessages: totalMessages,
					totalCalls: totalCalls,
				};
			} catch (err) {
				console.log(err);
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
