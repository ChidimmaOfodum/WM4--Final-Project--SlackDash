import { getChannelCalls, getChannelMembers, getUserInfo } from "../slackMethods";

const getCalls = async (_, res) => {
    let { messages } = await getChannelCalls();

    const huddles = messages.filter((call) => call.room); //gets conversations that are huddles

    let members = huddles.map((h) => h.room).map((p) => p.participant_history); //find the participants in a huddle

    console.log(members);
    res.json(huddles);
};

export default getCalls;