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

		if (!userWithEmail) {
			return res
				.status(400)
				.json({ message: "Email or password does not match!" });
		}

		const validated = await userWithEmail.comparePassword(password);

		if (validated) {
			const jwtToken = jwt.sign(
				{ id: userWithEmail.id, email: userWithEmail.email },
				process.env.JWT_SECRET
			);

			if (userWithEmail.role === "mentor") {
				await res.cookie("mentor", jwtToken, { maxAge: 900000 });
				return res.redirect("/students/table/view");
			}

			if (userWithEmail.role === "trainee") {
				await res.cookie("trainee", jwtToken, { maxAge: 900000 });
				return res.redirect("/traineedashboard");
			}
		} else {
			return res
				.status(400)
				.json({ message: "Email or password does not match!" });
		}
	} catch (err) {
		console.log(err);
	}
};

export default loginUser;
