//일단 멀터 한거 Review/uploads.js
const { reviews } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  console.log("영수증 : ", req.body);
  try {
    // console.log("req.body : ", req.body);
    // console.log("req.file : ", req.file);
    // console.log("auth : ", isAuthorized(req));
    // 카카오 유저
    if (req.body.kakao_userid !== null) {
      if (req.body.receipts_img === "" || req.body.content === "") {
        res.send({ status: 400, message: "잘못된 요청" });
      } else {
        let filename = req.body.receipts_img;
        console.log("filename은?", filename);
        reviews
          .create({
            receipts_img: filename,
            content: req.body.content,
            hospital_name: req.body.hospital_name,
            users_id: req.body.kakao_userid,
          })
          .then(() => {
            res.status(201).send({ message: "리뷰등록 성공" });
          });
      }
    } else {
      if (req.body.receipts_img === "" || req.body.content === "") {
        res.send({ status: 400, message: "영수증과 내용을 작성해 주세요" });
      } else {
        const userInfo = isAuthorized(req);
        // console.log(userInfo);
        if (userInfo) {
          let filename = req.body.receipts_img;
          // console.log("filename은?", filename);
          reviews
            .create({
              receipts_img: filename,
              content: req.body.content,
              hospital_name: req.body.hospital_name,
              users_id: userInfo.id,
            })
            .then(() => {
              res.status(201).send({ message: "리뷰등록 성공" });
            });
        } else {
          res.status(401).send({ message: "토큰이 유효하지 않음" });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
