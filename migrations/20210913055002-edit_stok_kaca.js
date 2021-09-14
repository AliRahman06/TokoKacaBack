'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('stok_kaca', 'tanggal', { 
      type: Sequelize.DATEONLY,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('stok_kaca', 'tanggal', { 
      type: Sequelize.DATE,
      allowNull: false
    });
  }
};
