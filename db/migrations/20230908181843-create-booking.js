"use strict";

const { BookingSchema, BOOKING_TABLE } = require("../models/Booking.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(BOOKING_TABLE, BookingSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(BOOKING_TABLE);
  },
};
