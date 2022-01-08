"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctors.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      license: DataTypes.INTEGER,
      hospital: DataTypes.STRING,
      profile_img: DataTypes.STRING,
      auth: DataTypes.INTEGER,
      agree: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "doctors",
    }
  );
  return doctors;
};
