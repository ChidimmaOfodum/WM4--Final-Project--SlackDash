import { call } from "file-loader";
import { getChannelCalls, getChannelMembers, getUserInfo } from "../slackMethods";

const getCalls = async (_, res) => {
    // const { members } = await getChannelMembers();
	// const membersInfo = await Promise.all(
	// 	members.map(async (userId) => {
	// 		return await getUserInfo(userId);
	// 	})
	// );

    let { messages } = await getChannelCalls();
    const huddles = messages.filter((call) => call.room); //gets conversations that are huddles
    console.log(huddles);

        return res.json(huddles);
    // let memeberFind = huddles.map((member) => membersInfo.find((mem) => mem.user.id === member.created_by));


    // console.log(memeberFind);
    //check to see who the created_by is and who the participants where to add it to their weekly stats
};

export default getCalls;