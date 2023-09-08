"use strict";

const {
  ExercisesSchema,
  EXERCISES_TABLE,
} = require("../models/Exercise.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(EXERCISES_TABLE, ExercisesSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(EXERCISES_TABLE);
  },
};
