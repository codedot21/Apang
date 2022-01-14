const { comments, doctors } = require("../../models");

module.exports = async (req, res) => {
  const doctorComments = await comments.findAll({
    where: {
      qna_id: req.body.qna_id,
    },
    // include: [
    //   {
    //     model: doctors,
    //     // where: { id: comments.doctors_id },
    //   },
    // ],
  });
  res.status(200).send({ comments: doctorComments });
};
