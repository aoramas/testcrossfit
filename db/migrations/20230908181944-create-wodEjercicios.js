"use strict";

const {
  WodEjerciciosSchema,
  WODEJERCICIOS_TABLE,
} = require("../models/WodEjercicios.models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(WODEJERCICIOS_TABLE, WodEjerciciosSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(WODEJERCICIOS_TABLE);
  },
};
