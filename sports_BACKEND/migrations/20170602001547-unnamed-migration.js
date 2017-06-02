'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Players',
      'team',
      Sequelize.STRING    )

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Players',
      'team',
      Sequelize.STRING
    )

  }
};
