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
//join 데이터
// associations
//users : reviews = 1:N
//users : qna = 1:N
//qna : comments = 1:N
//doctors : comments = 1:N
//qna_hashTag : qna = 1:N
//qna_hashTag : hashTag = 1:N

// const { users, comments, doctors, hashtag, qna, reviews } = sequelize.models;
// //users : reviews = 1:N
// users.hasMany(reviews, { foreignKey: "users_id" }); //1
// reviews.belongsTo(users, { foreignKey: "users_id" }); //N

// //users : qna = 1:N
// users.hasMany(qna, { foreignKey: "users_id" }); //1
// qna.belongsTo(users, { foreignKey: "users_id" }); //N

// //qna : comments = 1:N
// qna.hasMany(comments, { foreignKey: "qna_id" }); //1
// comments.belongsTo(qna, { foreignKey: "qna_id" }); //N

// //doctors : comments = 1:N
// doctors.hasMany(comments, { foreignKey: "doctors_id" });
// comments.belongsTo(doctors, { foreignKey: "doctors_id" });

// //hashtage : qna = N:M
// qna.belongsToMany(hashtag, { through: "qna_hashtag", foreignKey: "qna_id" }); //
// hashtag.belongsToMany(qna, {
//   through: "qna_hashtag",
//   foreignKey: "hashtag_id",
// }); //

module.exports = db;
