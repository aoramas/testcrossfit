'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PermissionType', [
      {
        nombre: 'Administrador',
        descripcion: 'Administrador del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Administrativo',
        descripcion: 'Administrativo del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Estudiante',
        descripcion: 'Estudiante del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PermissionType', null, {});
  }
};
