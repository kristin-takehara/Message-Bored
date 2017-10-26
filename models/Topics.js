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
        allowNull: false
      }
    });
  };

    // created_By: {type: DataTypes.INTEGER, allowNull: false, onUpdate: "CASCADE",
    //   references: {
    //     model: users,
    //     key: 'id',
    //     defferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }


  return topic;
};