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
	messages = messages.filter((el) => !el.subtype); //filter out bot messages
	const result = messages.map((el) => {
		const temp = membersInfo.find((item) => item.user.id === el.user);
		el.name = temp.user.real_name;
		return el;
	});

   const formattedResult = result.reduce((x, y) => {
			(x[y.name] = x[y.name] || []).push(y);
			return x;
		}, {});

	res.json(formattedResult);
};

export default getMessages;


