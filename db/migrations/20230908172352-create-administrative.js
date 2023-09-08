"use strict";

const {
  AdministrativeSchema,
  ADMIN_TABLE,
} = require("../models/Administrative.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ADMIN_TABLE, AdministrativeSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ADMIN_TABLE);
  },

  // async up (queryInterface, Sequelize) {
  //   await queryInterface.createTable(ADMIN_TABLE, AdministrativeSchema)
  // },
};
