"use strict";

const { HorarioSchema, SCHEDULE_TABLE } = require("../models/Horario.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(SCHEDULE_TABLE, HorarioSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(SCHEDULE_TABLE);
  },
};
