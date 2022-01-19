const { reviews, users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const accessToken = isAuthorized(req);
  const kakaoUserid = req.body.kakao_userid;
  const page = req.body.page; //usermypage
  console.log("req.body.page?", req.body.page);
  if (page === "usermypage") {
    if (kakaoUserid) {
      const reviewInfo = await reviews.findAll({
        where: {
          users_id: kakaoUserid,
        },
      });
      res
        .status(200)
        .send({ message: "리뷰 정보 요청 성공", myReviewInfo: reviewInfo });
    } else {
      // <-- 일반 로그인 -->
      // 토큰이 유효하지 않을 때
      if (!accessToken) {
        res.status(401).send({ message: "토큰이 유효하지 않음" });
      }
      // 토큰이 유효할 때
      else {
        const reviewInfo = await reviews.findAll({
          where: {
            users_id: accessToken.id,
          },
        });
        res
          .status(200)
          .send({ message: "리뷰 정보 요청 성공", myReviewInfo: reviewInfo });
      }
    }
  } else {
    const reviewInfo = await reviews.findAll({
      where: {
        hospital_name: req.body.hospital_name,
      },
      include: [
        {
          model: users,
        },
      ],
      order: [["id", "DESC"]],
    });
    res
      .status(200)
      .send({ message: "리뷰 정보 요청 성공", reviewInfo: reviewInfo });
  }

  // <-- 카카오 로그인인지 확인 -->
  // if (kakaoUserid) {
  //   const reviewInfo = await reviews.findOne({
  //     where: {
  //       // users_id: kakaoUserid,
  //       id: req.body.id, //잘 모르겠다.
  //     },
  //   });
  //   console.log("reviewsInfo는?", reviewInfo);
  //   res.status(200).send({ reviewInfo: reviewInfo });
  // } else {
  //   // <-- 일반 로그인 -->
  //   // 토큰이 유효하지 않을 때
  //   if (!accessToken) {
  //     res.status(401).send({ message: "Invalid Token" });
  //   }
  //   // 토큰이 유효할 때
  //   else {
  //     const reviewInfo = await reviews.findOne({
  //       where: {
  //         id: req.body.id,
  //       },
  //     });
  //     res.status(200).send({ reviewInfo: reviewInfo });
  //   }
  // }
};
