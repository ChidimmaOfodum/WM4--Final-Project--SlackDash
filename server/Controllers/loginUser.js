const jwt = require("jsonwebtoken");
const User = require("./models/user");

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const userWithEmail = await User.findOne({ where: { email } }).catch(
			(err) => {
				console.log("Error: ", err);
			}
		);

		if (!userWithEmail)
			return res
				.status(400)
				.json({ message: "Email or password does not match!" });

		if (userWithEmail.password !== password)
			return res
				.status(400)
				.json({ message: "Email or password does not match!" });

		const jwtToken = jwt.sign(
			{ id: userWithEmail.id, email: userWithEmail.email },
			process.env.JWT_SECRET
		);

		if (userWithEmail.role === "mentor") {
			res.cookie("nToken", jwtToken, { maxAge: 900000, httpOnly: true });
			return res.redirect("/students/table/view");
		}
	} catch (err) {
		console.log(err);
	}
};

export default loginUser;
