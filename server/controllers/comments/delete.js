const { comments } = require("../../models");

module.exports = async (req, res) => {
  await comments.destroy({
    where: { id: req.body.comment_id },
  });
  res.status(200).send({
    id: req.body.comment_id,
    message: "comment Delete Ok",
  });
};
