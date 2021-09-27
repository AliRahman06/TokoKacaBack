'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('stok_kaca', 'harga', 'harga_beli');

    await queryInterface.addColumn('stok_kaca', 'harga_jual', { 
      type: Sequelize.DOUBLE,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('stok_kaca','harga_beli','harga');
    await queryInterface.removeColumn('stok_kaca','harga_jual');
  }
};
