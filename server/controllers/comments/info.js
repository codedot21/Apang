const { comments, doctors, qna } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    const accessToken = isAuthorized(req);
    const page = req.body.page; //doctormypage
    if (page === "doctormypage") {
      const doctorComments = await comments.findAll({
        where: {
          doctors_id: accessToken.id,
        },
        include: [
          {
            model: qna,
          },
        ],
      });
      res
        .status(200)
        .send({
          myCommentInfo: doctorComments,
          message: "답변 정보 요청 성공",
        });
    } else {
      const doctorComments = await comments.findAll({
        where: {
          qna_id: req.body.qna_id,
        },
        include: [
          {
            model: doctors,
          },
          {
            model: qna,
          },
        ],
      });
      res
        .status(200)
        .send({ comments: doctorComments, message: "답변 정보 요청 성공" });
    }
  } catch (err) {
    console.log(err);
  }
};
