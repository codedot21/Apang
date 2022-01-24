const { hospital } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    const accessTokenData = isAuthorized(req);
    console.log("accesstoken모야", accessTokenData);
    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "토큰이 유효하지 않음" });
    } else if (accessTokenData) {
      let filename = req.body.hospital_img;
      console.log("filename은?", filename);
      hospital
        .create({
          hospital_name: req.body.hospital_name,
          hospital_img: filename,
        })
        .then(() => {
          res.status(201).send({ message: "병원 정보 등록 성공" });
        });
    }
  } catch (err) {
    console.log(err);
  }
};
