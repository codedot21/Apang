const { users, doctors } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = await users.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (userInfo) {
    // console.log("ria");
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
        res.send({
          status: 403,
          error: 2,
          message: "회원가입 신청이 승낙되지 않음",
        });
      }
    } else if (!doctorInfo) {
      return res.send({
        status: 401,
        message: "아이디 또는 비밀번호가 유효하지 않음",
        error: 1,
      });
    }
  }
};
