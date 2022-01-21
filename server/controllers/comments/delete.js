const { comments } = require("../../models");

module.exports = async (req, res) => {
  try {
    if (req.body.qna_id) {
      await comments.destroy({
        where: { qna_id: req.body.qna_id },
      });
      res.status(200).send({
        id: req.body.qna_id,
        message: "답변 삭제 완료",
      });
    } else {
      await comments.destroy({
        where: { id: req.body.comment_id },
      });
      res.status(200).send({
        id: req.body.comment_id,
        message: "답변 삭제 완료",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
