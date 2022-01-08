const { users, doctors } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = await users.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  if (userInfo) {
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(res, accessToken);
  } else if (!userInfo) {
    const doctorInfo = await doctors.findOne({
      where: { email: req.body.email, password: req.body.password },
    });
    if (doctorInfo) {
      delete doctorInfo.dataValues.password;
      const accessToken = generateAccessToken(doctorInfo.dataValues);
      sendAccessToken(res, accessToken);
    } else if (!doctorInfo) {
      return res.send({
        message: "Not authorized",
        error: 1,
      });
    }
  }
};
