'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('jenis_kaca', { 
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      panjang: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lebar: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tebal: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('jenis_kaca');
  }
};
