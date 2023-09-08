"use strict";

const {
  MembershipSchema,
  MEMBERSHIP_TABLE,
} = require("../models/Membership.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(MEMBERSHIP_TABLE, MembershipSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(MEMBERSHIP_TABLE);
  },
};
