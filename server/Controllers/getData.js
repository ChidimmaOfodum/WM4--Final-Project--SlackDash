import {
	getChannelData,
	getChannelMembers,
	getUserInfo,
	getReplies,
} from "../slackMethods";
import getCalls from "./getCalls";

const getData = async (channelId) => {
	const { members } = await getChannelMembers(channelId);
	const calls = await getCalls(channelId);

	let membersInfo = await Promise.all(
		members.map(async (userId) => {
			return await getUserInfo(userId);
		})
	);

	membersInfo = membersInfo.filter((el) => el.user.is_bot === false); //filter out bots

	//const trainees = memberInfo.filter((el) => el.user.profile.title.toLowerCase().includes("trainee"));

	let { messages } = await getChannelData(channelId);
	messages = messages.filter((el) => el.client_msg_id); //filter out bot messages

	let aggregateData = await Promise.all(
		membersInfo.map(async (el) => {
			const allReplies = [];
			const msg = [];
			const userReplies = [];
			for (let data of messages) {
				if (data["thread_ts"]) {
					let { messages } = await getReplies(channelId, data["thread_ts"]);
					messages = messages.filter((el) => el.ts !== data["thread_ts"]);
					allReplies.push(...messages);
				}
				if (data["user"] === el.user.id) {
					msg.push(data);
					el.messages = msg;
				}
				if (Object.keys(calls).includes(el.user.real_name)) {
					el.totalCalls = calls[el.user.real_name];
				}
			}

			for (let reply of allReplies) {
				if (reply["user"] === el.user.id) {
					userReplies.push(reply);
					el.replies = userReplies;
				}
			}

			return {
				ok: el.ok,
				user: el.user,
				messages: el.messages || [],
				replies: el.replies || [],
				totalCalls: el.totalCalls || 0,
			};
		})
	);

	return aggregateData.sort((a, b) =>
		a.messages.length + a.replies.length > b.messages.length + b.replies.length
			? -1
			: 1
	);
};

export default getData;
