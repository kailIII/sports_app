//todo (not list!)

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coach = sequelize.define('Coach', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Coach.belongsTo(models.Team, {
          foreignKey: 'coachId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Coach;
};
