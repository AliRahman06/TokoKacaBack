'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('pembeli', 'createdAt');
    await queryInterface.removeColumn('pembeli', 'updatedAt');
    await queryInterface.removeColumn('jenis_kaca', 'createdAt');
    await queryInterface.removeColumn('jenis_kaca', 'updatedAt');
    await queryInterface.removeColumn('stok_kaca', 'createdAt');
    await queryInterface.removeColumn('stok_kaca', 'updatedAt');
    await queryInterface.removeColumn('detil_transaksi', 'createdAt');
    await queryInterface.removeColumn('detil_transaksi', 'updatedAt');
    await queryInterface.removeColumn('transaksi', 'createdAt');
    await queryInterface.removeColumn('transaksi', 'updatedAt');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
