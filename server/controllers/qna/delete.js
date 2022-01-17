const { qna } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  const kakaoUserid = req.body.kakao_userid;
  // <-- 카카오 유저 -->
  if (kakaoUserid) {
    await qna.destroy({
      where: { id: req.body.qna_id },
    });
    res.status(200).send({
      id: req.body.qna_id,
      message: "qna Delete Ok",
    });
  } else {
    //<---- 일반유저 ---- >
    //   <-- 토큰 유효 x -->
    if (!auth) {
      res.status(401).send({ data: null, message: "Invalid Token" });
    } else {
      // <-- 토큰 유효 o, 사용자 id === 게시물 userId -->
      await qna.destroy({
        where: { id: req.body.qna_id },
      });
      res.status(200).send({
        id: req.body.qna_id,
        message: "qna Delete Ok",
      });
      // <-- 토큰 유효 o , but 사용자 id !==게시물 userId -->
    }
  }
  // const auth = isAuthorized(req);
  // const kakaoUserid = req.body.kakao_userid;
  // // <-- 카카오 유저 -->
  // if (kakaoUserid) {
  //   if (kakaoUserid === req.body.users_id) {
  //     await qna.destroy({
  //       where: { id: req.body.qna_id },
  //     });
  //     res.status(200).send({
  //       id: req.body.qna_id,
  //       message: "qna Delete Ok",
  //     });
  //   } else if (kakaoUserid !== req.body.users_id) {
  //     res.status(403).send({ message: "Invalid UserId" });
  //   }
  // } else {
  //   //<---- 일반유저 ---- >
  //   //   <-- 토큰 유효 x -->
  //   if (!auth) {
  //     res.status(401).send({ data: null, message: "Invalid Token" });
  //   } else {
  //     // <-- 토큰 유효 o, 사용자 id === 게시물 userId -->
  //     if (auth.id === req.body.users_id) {
  //       await qna.destroy({
  //         where: { id: req.body.id },
  //       });
  //       res.status(200).send({
  //         id: req.body.id,
  //         message: "qna Delete Ok",
  //       });
  //       // <-- 토큰 유효 o , but 사용자 id !==게시물 userId -->
  //     } else if (auth.id !== req.body.users_id) {
  //       res.status(403).send({ message: "Invalid UserId" });
  //     }
  //   }
  // }
};
