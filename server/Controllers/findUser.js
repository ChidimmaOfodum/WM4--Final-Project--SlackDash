import getSlackClient from "../slackClient";
const client = getSlackClient();

const findUser = async (req,res) => {
    const userEmail = req.body.email;
    const userData = await client.users.lookupByEmail({ 
        token: process.env.TOKEN,
        email: userEmail
    });
    const userSlackID = userData.user.id;
    res.json(userSlackID);
}

export default findUser;