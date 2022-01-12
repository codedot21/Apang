const { qna } = require("../../models");

module.exports = async (req, res) => {
  console.log("server detail : ", req.params);
  const qnaInfo = await qna.findOne({
    where: { id: req.params.id },
  });
  console.log("whatwhat: ", qnaInfo);
  res.status(200).send({ data: qnaInfo, message: "qna Detail Ok" });
};
