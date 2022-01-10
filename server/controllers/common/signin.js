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
      if (doctorInfo.dataValues.agree === "true") {
        delete doctorInfo.dataValues.password;
        const accessToken = generateAccessToken(doctorInfo.dataValues);
        sendAccessToken(res, accessToken, doctorInfo.dataValues.auth);
      } else {
        res.send({ error: 2, message: "회원가입 신청이 승낙되지 않았습니다." });
      }
    } else if (!doctorInfo) {
      return res.send({
        message: "Not authorized",
        error: 1,
      });
    }
  }
};
