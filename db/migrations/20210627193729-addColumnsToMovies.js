'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    queryInterface.addColumn('Movies', 'name', Sequelize.STRING, {
      allowNull: false
   });

   queryInterface.addColumn('Movies', 'slug', Sequelize.STRING, {

 });

 queryInterface.addColumn('Movies', 'price', Sequelize.INTEGER, {
  defaultValue:5,

  validate: {
          min:0
  }
});

queryInterface.addColumn('Movies', 'description', Sequelize.STRING, {
  allowNull: false
});

queryInterface.addColumn('Movies', 'image', Sequelize.STRING, {
});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.removeColumn('Movies', 'name')
      await queryInterface.removeColumn('Movies', 'slug')
      await queryInterface.removeColumn('Movies', 'price')
      await queryInterface.removeColumn('Movies', 'description')
      await queryInterface.removeColumn('Movies', 'image')

  }
};
//step2