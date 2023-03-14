const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_INTERNAL, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      "require": true,
      "rejectUnauthorized": false
    }
  }
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
