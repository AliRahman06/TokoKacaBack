'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transaksi', { 
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_pembeli: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'pembeli',
            key: 'id'
        }
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      bayar: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      kembali: {
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
    await queryInterface.dropTable('transaksi');
  }
};
