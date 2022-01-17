const { comments } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // doctor_id: doctorid
  const auth = isAuthorized(req);
  if (!auth) {
    res.status(401).send({ data: null, message: "Invalid Token" });
  } else {
    if (auth.id === req.body.doctor_id) {
      await comments.update(
        { content: req.body.content },
        { where: { id: req.body.comment_id } }
      );
      res.status(200).send({ message: "comment Update Ok" });
      //<-- 토큰 유효 x, 사용자id !== 게시물 userId -->
    } else if (auth.id !== req.body.doctor_id) {
      res.status(403).send({ message: "Invalid DoctorId" });
    }
  }
};
// let payload = { content: contentInfo.content };
