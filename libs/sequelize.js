const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("../db/models/index");
const URL = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URL, {
  host: config.dbHost,
  dialect: "postgres",
});

// Ejecuta las migraciones automáticamente al iniciar la aplicación
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Migraciones completadas");
  })
  .catch((error) => {
    console.error("Error al ejecutar migraciones:", error);
  });

setupModels(sequelize);

module.exports = sequelize;
