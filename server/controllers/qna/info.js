const { qna, users, hashtag, qna_hashtag } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

// //원래적은것
// module.exports = async (req, res) => {
//   const accessToken = isAuthorized(req);
//   const kakaoUserid = req.body.kakao_userid;
//   const page = req.body.page //usermypage
//   console.log("kakaouserid는?", kakaoUserid);

//   // <-- 카카오 로그인인지 확인 -->
//   if (kakaoUserid) {
//     // const qnaInfo = await qna.findOne({
//     //   where: {
//     //     users_id: kakaoUserid,
//     //   },
//     // });
//     const qnaInfo = await qna.findAll();
//     console.log("qnaInfo는?", qnaInfo);
//     res.status(200).send({ qnaInfo: qnaInfo });
//   } else {
//     // <-- 일반 로그인 -->
//     // 토큰이 유효하지 않을 때
//     if (!accessToken) {
//       res.status(401).send({ message: "Invalid Token" });
//     }
//     // 토큰이 유효할 때
//     else {
//       //   const qnaInfo = await qna.findOne({
//       //     where: {
//       //       users_id: accessToken.id,
//       //     },
//       //   });
//       const qnaInfo = await qna.findAll();
//       res.status(200).send({ qnaInfo: qnaInfo });
//     }
//   }
// };

// 그냥 다 가져오는것
// module.exports = async (req, res) => {
//   const qnaInfo = await qna.findAll();
//   console.log("qnaInfo는?", qnaInfo);
//   res.status(200).send({ qnaInfo: qnaInfo });
// };

module.exports = async (req, res) => {
  const accessToken = isAuthorized(req);
  const kakaoUserid = req.body.kakao_userid;
  const page = req.body.page; //usermypage
  if (page === "usermypage") {
    if (kakaoUserid) {
      const qnaInfo = await qna.findAll({
        where: {
          users_id: kakaoUserid,
        },
      });
      console.log("qnaInfo는?", qnaInfo);
      res.status(200).send({ myQnaInfo: qnaInfo });
    } else {
      // <-- 일반 로그인 -->
      // 토큰이 유효하지 않을 때
      if (!accessToken) {
        res.status(401).send({ message: "Invalid Token" });
      }
      // 토큰이 유효할 때
      else {
        const qnaInfo = await qna.findAll({
          where: {
            users_id: accessToken.id,
          },
        });
        res.status(200).send({ myQnaInfo: qnaInfo });
      }
    }
  } else {
    // const qnaInfo = await qna.findAll({ include: users });
    const qnaInfo = await qna.findAll({
      include: [
        {
          model: users,
        },
      ],
      // include: [
      //   {
      //     model: qna_hashtag,
      //     include: [
      //       {
      //         model: hashtag,
      //         attributes: ["id", "hashtag", "createdAt", "updatedAt"],
      //       },
      //     ],
      //   },
      // ],
      order: [["id", "DESC"]],
    });
    // console.log("qnaInfo는?", qnaInfo[1].user);
    res.status(200).send({ qnaInfo: qnaInfo });
  }
};
