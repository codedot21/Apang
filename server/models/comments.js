"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  comments.init(
    {
      content: DataTypes.STRING,
      qna_id: DataTypes.INTEGER,
      doctors_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return comments;
};
