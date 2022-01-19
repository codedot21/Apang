const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // body 내용 확인
  // console.log("userinfo : ", req);

  // 권한이 유효한지 먼저 확인하기
  const accessToken = isAuthorized(req);
  // console.log("accessToken what?", accessToken);

  // 토큰이 유효하지 않을 때
  if (!accessToken) {
    res.status(401).send({ message: "토큰이 유효하지 않음" });
  }
  // 토큰이 유효할 때
  else {
    const userInfo = await users.findOne({
      where: {
        id: accessToken.id,
      },
    });

    // 토큰이 유효할 때 사용자가 존재하는 것이기 때문에 아이디값에 해당하는 유저정보를 찾고 보여줌
    console.log("userInfo : ", userInfo);
    res
      .status(200)
      .send({ userInfo: userInfo, message: "일반유저 정보 요청 성공" });
  }
};
