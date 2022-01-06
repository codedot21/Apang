const { users, doctors } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = await users.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (userInfo === true) {
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(res, accessToken);
    
  } else if (userInfo === false) {
    const doctorInfo = await doctors.findOne({
      where: { email: req.body.email, password: req.body.password },
    });
    if (doctorInfo === true) {
      delete doctorInfo.dataValues.password;
      const accessToken = generateAccessToken(doctorInfo.dataValues);
      sendAccessToken(res, accessToken);
    } else if (doctorInfo === false) {
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
