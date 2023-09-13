'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Administrative', [{
        idUsuario: 1,
        cargo: 'Admin',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Administrative', null, {});
  }
};
