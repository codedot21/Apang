const { comments } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    console.log("들어오기는하니?", req); //null값.. 토큰이 안들어온다..
    const accessTokenData = isAuthorized(req);
    console.log("의사토큰있니?", accessTokenData);
    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "토큰이 유효하지 않음" });
    } else if (accessTokenData) {
      if (accessTokenData.agree === "false") {
        res.status(403).send({ message: "권한이 없음" });
      } else if (accessTokenData.agree === "true") {
        if (req.body.content === "") {
          res.status(400).send({ message: "잘못된 요청" });
        } else {
          await comments
            .create({
              content: req.body.content,
              qna_id: parseInt(req.body.qna_id),
              doctors_id: accessTokenData.id,
            })
            .then(() => {
              res.status(201).send({ message: "답변 등록 성공" });
            });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
