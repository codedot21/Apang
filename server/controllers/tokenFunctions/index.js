require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    const token = jwt.sign(data, process.env.ACCESS_SECRET, {
      expiresIn: "2d",
    });
    return token;
  },

  sendAccessToken: (res, accessToken, auth) => {
    // console.log("res뭐지?", res);
    return res
      .cookie("jwt", accessToken)
      .status(200)
      .send({
        data: {
          auth: auth,
        },
        message: "로그인 성공",
      });
  },

  isAuthorized: (req) => {
    const token = req.cookies.jwt;
    // console.log("token : ", token);
    const userinfo = jwt.verify(
      token,
      process.env.ACCESS_SECRET,
      (err, decoded) => {
        // console.log("이쪽응로왔나?");
        // console.log("decoded : ", decoded);
        if (decoded) {
          return decoded;
        } else {
          console.log(err);
        }
      }
    );
    return userinfo;
  },
};
