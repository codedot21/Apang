const { users, doctors } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  // isAuthorized 함수로 어떤 유저인지 판단
  const user = isAuthorized(req);
  // console.log("user : ", user);
  // 유저의 권한이 1이면 의사유저이므로 doctors테이블에서 삭제
  if (user.auth === 1) {
    doctors.destroy({
      where: { id: user.id },
    });
    res.status(200).send({ auth: 1, message: "의사유저 삭제 완료" });
    // 그렇지않고 유저의 권한이 2이면 일반유저이므로 users테이블에서 삭제
  } else if (user.auth === 2) {
    users.destroy({
      where: { id: user.id },
    });
    res.status(200).send({ auth: 2, message: "일반유저 삭제 완료" });
    // 그것도 아니면 관리자 이기때문에 아이디 삭제 x
  } else {
    res.status(400).send({ auth: 0, message: "삭제 권한이 없습니다." });
  }
};
