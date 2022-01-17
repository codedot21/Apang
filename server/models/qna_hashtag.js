"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class qna_hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  qna_hashtag.init(
    {
      qna_id: DataTypes.INTEGER,
      hashtag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "qna_hashtag",
    }
  );
  return qna_hashtag;
};
