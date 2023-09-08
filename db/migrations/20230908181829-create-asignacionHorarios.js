"use strict";

const {
  AsignacionHorariosSchema,
  AsignacionHorarios_TABLE,
} = require("../models/AsignacionHorarios.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      AsignacionHorarios_TABLE,
      AsignacionHorariosSchema
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(AsignacionHorarios_TABLE);
  },
};
