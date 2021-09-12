'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stok_kaca', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_jenis_kaca: {
        type: Sequelize.SMALLINT,
        allowNull: false,
          references: {
            model: 'jenis_kaca',
            key: 'id'
        }
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false
      },
      stok: {
        type: Sequelize.SMALLINT,
        allowNull: false

      },
      harga: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable('stok_kaca');

  }
};
