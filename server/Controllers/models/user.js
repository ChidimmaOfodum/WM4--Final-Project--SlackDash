const { DataTypes } = require("sequelize");
const sequelize = require("../sequelizeConfig");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
	"User",
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},

	{
		hooks: {
			beforeCreate: (user, options) => {
				return bcrypt
					.hash(user.password, 10)
					.then((hash) => {
						user.password = hash;
					})
					.catch((err) => {
						throw new Error();
					});
			},
		},
	}
);

User.prototype.comparePassword = (plainPassword, cb) => {
	bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
		if (err) return cb(err);

		cb(null, isMatch);
	});
};

module.exports = User;
