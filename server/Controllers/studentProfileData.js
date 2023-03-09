import db from "../db";
import { getChannelData, getReplies, getUserInfo } from "../slackMethods";

export async function studentProfileData(userId) {
	try {
		let totalMessages = 0;
		var totalCalls = 0;
		var finalTs = 0;
		let messagesStatsForEachChannel = [];
		let channelsFromDataBase = await db.query(`SELECT * FROM public.channel`);
		let channelList = channelsFromDataBase.rows;
		for (let i = 0; i < channelList.length; i++) {
			let channelDetails = channelList[i];
			var channelID = channelDetails.channel_id;
			let channelName = channelDetails.channel_name;
			var totalMessagesPerChannel = 0;
			var totalCallsForEachChannel = 0;
			const rawChannelMessages = await getChannelData(channelID, 0, 0)
			const channelMessages = rawChannelMessages.messages;

			// Calculating all calls
			let calls = channelMessages.filter((call) => call.room);
			let callers = calls
				.map((c) => c.room)
				.map((p) => p.participant_history)
				.flat();
			 callers.map(async (trainee) => {
				let isSelectedTrainee = (trainee) === userId;
				if (isSelectedTrainee) {
					totalCalls = totalCalls + 1;
					totalCallsForEachChannel = totalCallsForEachChannel + 1;
				}
			});
			const ts = channelMessages[0].ts;
			if (finalTs === 0) {
				finalTs = ts;
			}
			if ( ts > finalTs) {
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
					let replyThread = await getReplies(channelID, threadTs);
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
		const dOLM =  new Date(finalTs * 1000);
		const finalTime =
			(`${dOLM.toLocaleDateString(
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
