import {
	getChannelMembers,
	getChannelMessages,
	getUserInfo,
} from "../slackMethods";
import getCalls from "./getCalls";


const getData = async (_, res) => {
	const { members } = await getChannelMembers();
	const calls = await getCalls();
	const membersInfo = await Promise.all(
		members.map(async (userId) => {
			return await getUserInfo(userId);
		})
	);

	//const trainees = memberInfo.filter((el) => el.user.profile.title.toLowerCase().includes("trainee"));

	let { messages } = await getChannelMessages();
	messages = messages.filter((el) => el.client_msg_id); //filter out bot messages
	const result = messages.map((el) => {
		const temp = membersInfo.find((item) => item.user.id === el.user);
		el.name = temp.user.real_name;
		el.image_32 = temp.user.profile.image_32;
		return el;
	});

	const formattedResult = result.reduce((acc, curr) => {
		(acc[curr.name] = acc[curr.name] || []).push(curr);
		return acc;
	}, {});

	for (const name in formattedResult) {
		if (Object.keys(calls).includes(name)) {
			formattedResult[name][0].totalCalls = calls[name];
		}
	}

	res.json(formattedResult);
};

export default getData;
