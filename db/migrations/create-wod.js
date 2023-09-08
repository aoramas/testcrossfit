"use strict";

const { WodSchema, WOD_TABLE } = require("../models/Wod.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(WOD_TABLE, WodSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(WOD_TABLE);
  },
};
