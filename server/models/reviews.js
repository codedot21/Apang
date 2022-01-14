"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.reviews.belongsTo(models.users, { foreignKey: "users_id" }); //N
      // define association here
    }
  }
  reviews.init(
    {
      users_id: DataTypes.INTEGER,
      receipts_img: DataTypes.STRING,
      content: DataTypes.STRING,
      d_name: DataTypes.STRING,
      hospital_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "reviews",
    }
  );
  return reviews;
};
