const { users } = require("../../models");

module.exports = (req, res) => {
  console.log("일반 회원가입 : ", req.body);
  // req.body에 회원가입 할 정보가 담겨있음.
  const userInfo = req.body;
  // 닉네임 중복여부를 확인하기위한 코드
  // const existNickname = users.findOne({
  //   where: { nickname: userInfo.nickname },
  // });

  if (
    userInfo.email === "" ||
    userInfo.nickname === "" ||
    userInfo.password === ""
  ) {
    // 항목이 비었을때 400코드에 bad request메세지를 보내주고 클라이언트에서는 항목이비었다는 메세지.
    res.send({ error: 1, message: "Bad Request" });
  }
  //  else if (existNickname) {
  //   res.send({ error: 3, message: "같은 닉넴임이 존재합니다." });
  // }
  else {
    users
      .findOrCreate({
        where: { email: userInfo.email },
        defaults: {
          password: userInfo.password,
          nickname: userInfo.nickname,
          profile_img: "publicprofile.jpeg",
          auth: 2,
        },
      })
      .then(([users, created]) => {
        // create => true : 중복되는 이메일이 없어서 새로 만들어줌.
        // create => false : 중복되는 이메일이 있어서 새로 만들 수 없음.

        // 중복되는 이메일이 없을 때 201상태코드와 SignUp Ok메세지를 보내줌.
        if (created) {
          res.status(201).send({ message: "SignUp Ok" });
        }
        // 중복되는 이메일이 있을때 409상태코드와 Eamil Exist메세지를 보내줌.
        else {
          res.send({ error: 2, message: "Email Exist" });
        }
      });
  }
};
