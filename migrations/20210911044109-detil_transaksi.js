'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detil_transaksi', { 
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_transaksi: {
        type: Sequelize.BIGINT,
        allowNull: false,
          references: {
            model: 'transaksi',
            key: 'id'
        }
      },
      id_jenis_kaca: {
        type: Sequelize.SMALLINT,
        allowNull: false,
          references: {
            model: 'jenis_kaca',
            key: 'id'
        }
      },
      panjang: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lebar: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      biaya: {
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
    await queryInterface.dropTable('detil_transaksi');
  }
};
