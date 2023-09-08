"use strict";

const {
  PromotionSchema,
  PROMOTION_TABLE,
} = require("../models/Promotion.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROMOTION_TABLE, PromotionSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROMOTION_TABLE);
  },
};
