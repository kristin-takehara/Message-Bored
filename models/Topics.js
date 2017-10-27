//jshint esversion: 6

//MODELS -- TOPICS

module.exports = function(sequelize, DataTypes) {
  const topic = sequelize.define('topic', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false},
  });

  topic.associate = function(models) {
    topic.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "created_by",
        allowNull: false
      }
    });
    topic.hasMany(models.message, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "topic_id",
        allowNull: false
      }
    });
  };
  return topic;
};