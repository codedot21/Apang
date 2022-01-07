const { users, doctors } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = await users.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (userInfo) {
    console.log("ria");
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(res, accessToken, userInfo.dataValues.auth);
  } else if (!userInfo) {
    const doctorInfo = await doctors.findOne({
      where: { email: req.body.email, password: req.body.password },
    });
    if (doctorInfo) {
      delete doctorInfo.dataValues.password;
      const accessToken = generateAccessToken(doctorInfo.dataValues);
      sendAccessToken(res, accessToken, doctorInfo.dataValues.auth);
    } else if (doctorInfo) {
      return res.status(401).send({
        message: "Not authorized",
      });
    }
  }
};

// const { users } = require("../../models");
// const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

// module.exports = async (req, res) => {
//   const userInfo = await users.findOne({
//     where: { email: req.body.email, password: req.body.password },
//   });
//   if (!userInfo) {
//     return res.status(401).send({
//       message: "Not authorized",
//     });
//   } else {
//     delete userInfo.dataValues.password;
//     const accessToken = generateAccessToken(userInfo.dataValues);
//     sendAccessToken(res, accessToken);
//   }
// };
