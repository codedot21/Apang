const { comments } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    // doctor_id: doctorid
    const auth = isAuthorized(req);
    if (!auth) {
      res.status(401).send({ data: null, message: "토큰이 유효하지 않음" });
    } else {
      if (auth.id === req.body.doctor_id) {
        await comments.update(
          { content: req.body.content },
          { where: { id: req.body.comment_id } }
        );
        res.status(200).send({ message: "답변 수정 완료" });
        //<-- 토큰 유효 x, 사용자id !== 게시물 userId -->
      } else if (auth.id !== req.body.doctor_id) {
        res.status(403).send({ message: "해당 의사가 아님" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
// let payload = { content: contentInfo.content };
