"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.hashtag.belongsToMany(models.qna, {
        through: "qna_hashtag",
        foreignKey: "hashtag_id",
      }); //
    }
  }
  hashtag.init(
    {
      hashtag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hashtag",
    }
  );
  return hashtag;
};
