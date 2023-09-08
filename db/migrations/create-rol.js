"use strict";

const { RolSchema, ROL_TABLE } = require("../models/Rol.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ROL_TABLE, RolSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ROL_TABLE);
  },
};
