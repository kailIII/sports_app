//todolist 

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Team.hasOne(models.Coach, {
          foreignKey: 'coachId',
        })
      }
    }
  });
  return Team;
};
