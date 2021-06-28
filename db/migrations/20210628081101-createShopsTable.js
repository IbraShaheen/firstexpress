"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Shops", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      
      updatedAt: Sequelize.DATE,

      createdAt: Sequelize.DATE,

      name: { type: Sequelize.STRING, allowNull: false },

      image: { type: Sequelize.STRING, allowNull: false },

      slug: {
        type: Sequelize.STRING,
        unique: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Shops");
  },
};
