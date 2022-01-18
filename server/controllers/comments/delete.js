const { comments } = require("../../models");

module.exports = async (req, res) => {
  if (req.body.qna_id) {
    await comments.destroy({
      where: { qna_id: req.body.qna_id },
    });
    res.status(200).send({
      id: req.body.qna_id,
      message: "related comment Delete Ok",
    });
  } else {
    await comments.destroy({
      where: { id: req.body.comment_id },
    });
    res.status(200).send({
      id: req.body.comment_id,
      message: "comment Delete Ok",
    });
  }
};
