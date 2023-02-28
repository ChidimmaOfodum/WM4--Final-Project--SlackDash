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

export async function getChannelData() {
	try {
		return await client.conversations.history({
			token: process.env.TOKEN,
			channel: process.env.CHANNEL_ID,
			oldest: 1676377207.351409,
		});
	} catch(error){
		console.log(error);
	}
}

// accept a student ID and give me total messages in each channel 
export async function studentProfileData(userId) {
	try {
		    let totalMessages = 0;
		    let totalCalls = 0;
            let messagesStatsForEachChannel = [];
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
			return await { traineeName: realName, profilePic:profilePic  , messagesStatsForEachChannel: messagesStatsForEachChannel ,totalMessages:totalMessages , totalCalls: totalCalls  };
     		}
		    catch(error){
		    console.log(error);
	    }
}
