'use strict';

//const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('Movies', { 
       
      id: {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    });
     
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.dropTable('Movies');
     
  }
};
