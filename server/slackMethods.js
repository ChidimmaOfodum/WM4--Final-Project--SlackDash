import getSlackClient from "./slackClient";
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

export async function getChannelData(channelID) {
	try {
		return await client.conversations.history({
			token: process.env.TOKEN,
			channel: channelID,
			//oldest: 1676377207.351409,
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
		    let totalCalls = 0;
            let messagesStatsForEachChannel = [];
			let finalTs = 0;
			// Get a list of all channels the user is a member of
			const { channels } = await client.users.conversations({token: process.env.TOKEN, user: userId });

			// Calculating all messages of a given user in those channels
		    await Promise.all(channels.map( async (channel) => {
				let totalMessagesForEachChannel = 0;
				let totalCallsForEachChannel = 0;
				const channelId = await channel.id;
				const channelName = await channel.name;
			    const channelMessages = await client.conversations.history({token: process.env.TOKEN, channel: channelId, });
			    const allMessages = await  channelMessages.messages;
				const ts = await allMessages[0].ts;
				if(await finalTs===0){
					finalTs = ts;
				}
                if(await ts> finalTs){
					finalTs = ts;
				}
				let calls = await allMessages.filter((call) => call.room);
                let callers = await calls.map((c) => c.room).map((p) => p.participant_history).flat();
		        await callers.map(async (trainee)=>{
					let isSelectedTrainee = await trainee === userId;
					if(isSelectedTrainee){
						totalCalls = totalCalls + 1;

						totalCallsForEachChannel =  totalCallsForEachChannel + 1;
					}
					});
		        await allMessages.map(async (message)=>{
				let isSelectedUSer = await message.user === userId;
				if(isSelectedUSer){
					totalMessages =  totalMessages + 1;
					totalMessagesForEachChannel = totalMessagesForEachChannel + 1;
				}
				});
				await messagesStatsForEachChannel.push({id:channelId, channelName:channelName, totalMessagesForEachChannel:totalMessagesForEachChannel, totalCallsForEachChannel:totalCallsForEachChannel });
		    })); 

			// Get the real name of the user
			const userInfo = await getUserInfo(userId);
			const realName = await userInfo.user.real_name;  
			const profilePic = await userInfo.user.profile.image_32;
			// Finding time of very last message
			const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
			const dOLM = await new Date(finalTs * 1000);
			const finalTime = await `${dOLM.toLocaleDateString("en-GB", options)}, ${dOLM.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` || "Nill";

			return await { traineeName: realName, profilePic:profilePic, finalTime:finalTime  , messagesStatsForEachChannel: messagesStatsForEachChannel ,totalMessages:totalMessages , totalCalls: totalCalls  };
     		}
		    catch(error){
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
