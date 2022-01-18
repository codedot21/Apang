'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hospital.init({
    hospital_name: DataTypes.STRING,
    hospital_img: DataTypes.STRING,
    hospital_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hospital',
  });
  return hospital;
};