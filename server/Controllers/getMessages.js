import { getChannelMembers, getChannelMessages, getUserInfo } from "../slackMethods";

const getMessages = async (_, res) => {
	const { members } = await getChannelMembers();
	const membersInfo = await Promise.all(
		members.map(async (userId) => {
			return await getUserInfo(userId);
		})
	);
	//const trainees = memberInfo.filter((el) => el.user.profile.title.toLowerCase().includes("trainee"));

	let { messages } = await getChannelMessages();
	messages = messages.filter((el) => el.client_msg_id); //filter out bot messages and calls
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

	res.json(formattedResult);
};

export default getMessages;


