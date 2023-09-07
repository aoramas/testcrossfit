// const { nombreModelo, modeloSchema } = require("./person.model");
const { User, UserSchema } = require("./User.model");

function setupModels(sequelize) {
//   nombreModelo.init(modeloSchema, nombreModelo.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

}

module.exports = setupModels;