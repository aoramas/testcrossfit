'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        identificacion: '9999999999',
        nombres: 'admin',
        apellidos: 'admin',
        username: 'admin',
        password: 'admin',
        email: 'admin@admin.com',
        telefono: '0999999999',
        direccion: 'sin direccion',
        fechaInicio: new Date(),
        estado: true,
        idRol: 1,
        cargo: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);  
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
