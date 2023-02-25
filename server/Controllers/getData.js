import {
	getChannelData,
	getChannelMembers,
	getUserInfo,
} from "../slackMethods";
import getCalls from "./getCalls";


const getData = async (_, res) => {
	const { members } = await getChannelMembers();
	const calls = await getCalls();

	let membersInfo = await Promise.all(
		members.map(async (userId) => {
			return await getUserInfo(userId);
		})
	);

	membersInfo = membersInfo.filter((el) => el.user.is_bot === false); //filter out bots

	//const trainees = memberInfo.filter((el) => el.user.profile.title.toLowerCase().includes("trainee"));

	let { messages } = await getChannelData();
	messages = messages.filter((el) => el.client_msg_id); //filter out bot messages

	let aggregateData = membersInfo.map((el) => {
		const msg = [];
		for (let data of messages) {
			if (data["user"] === el.user.id) {
				msg.push(data);
				el.messages = msg;
			}

			if(Object.keys(calls).includes(el.user.real_name)) {
				el.totalCalls = calls[el.user.real_name];
			}
		}
		return {
			ok: el.ok,
			user: el.user,
			messages: el.messages || [],
			totalCalls: el.totalCalls || 0,
		};
	});

	res.json(aggregateData);
};

export default getData;
