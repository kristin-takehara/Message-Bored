//jshint esversion: 6

//MODELS -- TOPICS

module.exports = function(sequelize, DataTypes) {
  const topic = sequelize.define('topic', {
    id: {type: DataTypes.INTEGER, allowNull: false, defaultValue: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false},
    created_By: {type: DataTypes.INTEGER, allowNull: false, onUpdate: "CASCADE",
      references: {
        model: user,
        key: 'id',
        defferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  });

  return topic;
};