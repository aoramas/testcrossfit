const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("./../db/models/index");
const URL = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URL, {
  host: config.dbHost,
  dialect: "postgres",
});

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;