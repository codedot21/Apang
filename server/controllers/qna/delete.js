const { qna } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    const auth = isAuthorized(req);
    const kakaoUserid = req.body.kakao_userid;
    // <-- 카카오 유저 -->
    if (kakaoUserid) {
      await qna.destroy({
        where: { id: req.body.qna_id },
      });
      res.status(200).send({
        id: req.body.qna_id,
        message: "QnA 삭제 성공",
      });
    } else {
      //<---- 일반유저 ---- >
      //   <-- 토큰 유효 x -->
      if (!auth) {
        res.status(401).send({ data: null, message: "토큰이 유효하지 않음" });
      } else {
        // <-- 토큰 유효 o, 사용자 id === 게시물 userId -->
        await qna.destroy({
          where: { id: req.body.qna_id },
        });
        res.status(200).send({
          id: req.body.qna_id,
          message: "QnA 삭제 성공",
        });
        // <-- 토큰 유효 o , but 사용자 id !==게시물 userId -->
      }
    }
  } catch (err) {
    console.log(err);
  }
};
