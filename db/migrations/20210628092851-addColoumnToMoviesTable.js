'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    queryInterface.addColumn('Movies', 'shopId', Sequelize.INTEGER, {

      references: {

          model: {
              tableName: "Shops",
              schema: "schema",
          },
        key: "id",

      },
      allowNull: false
   });

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.removeColumn('Movies', 'shopId')

  }
};
//step4