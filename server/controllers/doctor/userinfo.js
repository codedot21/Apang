const { doctors } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // body 내용 확인
  // console.log(req.body);

  // 권한이 유효한지 먼저 확인하기
  const userInfo = isAuthorized(req);

  // 관리자가 요청할 때
  if (userInfo.auth === 0) {
    const doctorList = await doctors.findAll();
    console.log("의사 리스트 : ", doctorList);
    res
      .status(200)
      .send({ message: "의사리스트 요청 확인", doctorList: doctorList });
  }
  // 관리자가 아닐때는 개인 정보 요청
  else {
    // 토큰이 유효하지 않을 때
    if (!userInfo) {
      res.status(401).send({ message: "Invalid Token" });
    }
    // 토큰이 유효할 때
    else {
      const doctorInfo = doctors.findOne({
        where: {
          id: userInfo.id,
        },
      });
      // 토큰이 유효할 때 사용자가 존재하는 것이기 때문에 아이디값에 해당하는 유저정보를 찾고 보여줌
      res.status(200).send({ userInfo: doctorInfo });
    }
  }
};
