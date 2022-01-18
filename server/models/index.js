"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const { comments, doctors, hashtag, qna_hashtag, qna, reviews, users } =
  sequelize.models;

users.hasMany(qna, { foreignKey: "users_id" });
users.hasMany(reviews, { foreignKey: "users_id" });
qna.belongsTo(users, { foreignKey: "users_id" });
reviews.belongsTo(users, { foreignKey: "users_id" });

doctors.hasMany(comments, { foreignKey: "doctors_id" });
comments.belongsTo(doctors, { foreignKey: "doctors_id" });

qna.hasMany(qna_hashtag, { foreignKey: "qna_id" });
qna_hashtag.belongsTo(qna, { foreignKey: "qna_id" });
qna.belongsToMany(hashtag, { through: "qna_hashtag", foreignKey: "qna_id" });
hashtag.hasMany(qna_hashtag, { foreignKey: "hashtag_id" });
qna_hashtag.belongsTo(hashtag, { foreignKey: "hashtag_id" });
hashtag.belongsToMany(qna, {
  through: "qna_hashtag",
  foreignKey: "hashtag_id",
});

qna.hasMany(comments, { foreignKey: "qna_id" });
comments.belongsTo(qna, { foreignKey: "qna_id" });

module.exports = db;
