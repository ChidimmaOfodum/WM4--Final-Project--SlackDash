import { getChannelData, getUserInfo } from "../slackMethods";

const getCalls = async (channelID, oldest, latest) => {
    let { messages } = await getChannelData(channelID, oldest, latest);
    let calls = messages.filter((call) => call.room);
    let callers = calls.map((c) => c.room).map((p) => p.participant_history).flat();

    const callersInfo = await Promise.all(
		callers.map(async (userId) => {
			return await getUserInfo(userId);
		})
	);

    const callerName = callersInfo.map(({ user }) => user.real_name);

    const callersData = {};

    callerName.forEach((el) => callersData[el] = (callersData[el] || 0) + 1);

    return callersData;
};

export default getCalls;