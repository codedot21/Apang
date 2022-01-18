const { comments, doctors, qna } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const accessToken = isAuthorized(req);
  const page = req.body.page; //doctormypage
  if (page === "doctormypage") {
    const doctorComments = await comments.findAll({
      where: {
        doctors_id: accessToken.id,
      },
      include: [{ model: qna }],
    });
    res.status(200).send({ myCommentInfo: doctorComments });
  } else {
    const doctorComments = await comments.findAll({
      where: {
        qna_id: req.body.qna_id,
      },
      include: [
        {
          model: doctors,
          // where: { id: comments.doctors_id },
        },
      ],
      // const qnaInfo = await qna.findAll({
      //   include: [
      //     {
      //       model: users,
      //     },
    });
    res.status(200).send({ comments: doctorComments });
  }
};
