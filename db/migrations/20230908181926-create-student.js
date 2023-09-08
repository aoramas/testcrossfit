"use strict";

const { StudentSchema, STUDENT_TABLE } = require("../models/Student.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(STUDENT_TABLE, StudentSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(STUDENT_TABLE);
  },
};
