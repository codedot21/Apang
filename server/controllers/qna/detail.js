const { qna } = require("../../models");

module.exports = async (req, res) => {
  console.log("server detail : ", req.params);
  const qnaInfo = await qna.findOne({
    where: { id: req.params.id },
  });
  console.log("whatwhat: ", qnaInfo);
  res.status(200).send({ data: qnaInfo, message: "QnA 상세정보 요청 성공" });
};
