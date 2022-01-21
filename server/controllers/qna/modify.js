const { qna } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    const auth = isAuthorized(req);
    const kakaoUserid = req.body.kakao_userid;
    console.log("kakao userid?", kakaoUserid);
    console.log("usersid는?", req.body.users_id);
    //<-- 카카오 유저 -->
    if (kakaoUserid) {
      if (kakaoUserid === req.body.users_id) {
        await qna.update(
          {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category, //안적어도 그대로 유지된다.
          },
          { where: { users_id: req.body.users_id } }
        );
        res.status(200).send({ message: "QnA 수정 성공" });
      } else if (kakaoUserid !== req.body.users_id) {
        res.status(403).send({ message: "권한이 없음" });
      }
    } else {
      //<-- 일반유저 -->
      //   <-- 토큰 유효 x -->
      if (!auth) {
        res.status(401).send({ data: null, message: "토큰이 유효하지 않음" });
        //<-- 토큰 유효 o, 사용자 id === 게시물 userId -->
      } else {
        if (auth.id === req.body.user_id) {
          await qna.update(
            {
              title: req.body.title,
              content: req.body.content,
              category: req.body.category,
            },
            { where: { users_id: req.body.users_id } }
          );
          res.status(200).send({ message: "QnA 수정 성공" });
          //<-- 토큰 유효 x, 사용자id !== 게시물 userId -->
        } else if (auth.id !== req.body.user_id) {
          res.status(403).send({ message: "권한이 없음" });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
