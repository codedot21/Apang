const { qna, users, hashtag, comments } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    const accessToken = isAuthorized(req);
    const kakaoUserid = req.body.kakao_userid;
    const page = req.body.page; //usermypage
    console.log("req.body모야?", req.body.page);
    if (page === "usermypage") {
      if (kakaoUserid) {
        const qnaInfo = await qna.findAll({
          where: {
            users_id: kakaoUserid,
          },
          include: [
            {
              model: users,
            },
          ],
        });
        console.log("qnaInfo는?", qnaInfo);
        res
          .status(200)
          .send({ myQnaInfo: qnaInfo, message: "QnA 정보 요청 성공" });
      } else {
        // <-- 일반 로그인 -->
        // 토큰이 유효하지 않을 때
        if (!accessToken) {
          res.status(401).send({ message: "토큰이 유효하지 않음" });
        }
        // 토큰이 유효할 때
        else {
          const qnaInfo = await qna.findAll({
            where: {
              users_id: accessToken.id,
            },
            include: [
              {
                model: users,
              },
            ],
          });
          res
            .status(200)
            .send({ myQnaInfo: qnaInfo, message: "QnA 정보 요청 성공" });
        }
      }
    } else if (req.body.page === "qnaDetail") {
      const qnaDetailInfo = await qna.findOne({
        where: {
          id: req.body.qna_id,
        },
        include: [
          {
            model: users,
          },
        ],
      });
      console.log("what is", qnaDetailInfo);
      res
        .status(200)
        .send({ qnaDetail: qnaDetailInfo, message: "QnA 정보 요청 성공" });
    } else {
      if (!req.body.filter || req.body.filter === "전체") {
        const qnaInfo = await qna.findAll({
          include: [
            {
              model: users,
            },
            {
              model: hashtag,
            },
            {
              model: comments,
            },
          ],
          order: [["id", "DESC"]],
        });
        res
          .status(200)
          .send({ qnaInfo: qnaInfo, message: "QnA 정보 요청 성공" });
      } else {
        // console.log("filter : ", req.body.filter);
        const filterInfo = await qna.findAll({
          include: [
            {
              model: users,
            },
            {
              model: hashtag,
            },
            {
              model: comments,
            },
          ],
          where: { category: req.body.filter },
          order: [["id", "DESC"]],
        });
        res
          .status(200)
          .send({ qnaInfo: filterInfo, message: "QnA 정보 요청 성공" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
