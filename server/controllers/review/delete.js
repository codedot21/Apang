const { reviews } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  const kakaoUserid = req.body.kakao_userid;
  // <-- 카카오 유저 -->
  if (kakaoUserid) {
    await reviews.destroy({
      where: { id: req.body.review_id },
    });
    res.status(200).send({
      id: req.body.review_id,
      message: "review Delete Ok",
    });
  } else {
    //<---- 일반유저 ---- >
    //   <-- 토큰 유효 x -->
    if (!auth) {
      res.status(401).send({ data: null, message: "Invalid Token" });
    } else {
      // <-- 토큰 유효 o, 사용자 id === 게시물 userId -->

      await reviews.destroy({
        where: { id: req.body.review_id },
      });
      res.status(200).send({
        id: req.body.review_id,
        message: "review Delete Ok",
      });
    }
  }
};
