import getSlackClient from "../slackClient";
import { getUsersByEmail } from "../slackMethods";
const client = getSlackClient();
const User = require("./models/user");

const signUpUser = async (req, res) => {
	try {
		const { firstName, lastName, role, email, password } = req.body;

		const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
			(err) => {
				console.log("Error: ", err);
			}
		);

		if (alreadyExistsUser) {
			return res
				.status(409)
				.json({ error: "User with email already exists!" });
		}

		const userData = await getUsersByEmail(email);

		if (userData) {
			const newUser = new User({ firstName, lastName, role, email, password });
			await newUser.save().catch((err) => {
				console.log("Error: ", err);
				res.status(500).json({ error: "Cannot register user at the moment!" });
			});
			res.json({ message: "Thanks for registering", email: email });
		} else {
			res.status(401).json({ error: "Please register with your slack email" });
		}
	} catch (err) {
		console.log(err);
	}
};

export default signUpUser;
