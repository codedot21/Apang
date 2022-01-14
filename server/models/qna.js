"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class qna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.qna.belongsTo(models.users, { foreignKey: "users_id" }); //N
      models.qna.hasMany(models.comments, { foreignKey: "qna_id" }); //1
      models.qna.belongsToMany(models.hashtag, {
        through: "qna_hashtag",
        foreignKey: "qna_id",
      }); //
    }
  }
  qna.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      users_id: DataTypes.INTEGER,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "qna",
    }
  );
  return qna;
};
