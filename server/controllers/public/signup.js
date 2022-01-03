const { users } = require("../../models/users");

module.exports = (req, res) => {
  // console.log(req.body);
  // req.body에 회원가입 할 정보가 담겨있음.
  const userInfo = req.body;
  if (
    userInfo.email === undefined ||
    userInfo.nickname === undefined ||
    userInfo.password === undefined
  ) {
    // 항목이 비었을때 400코드에 bad request메세지를 보내주고 클라이언트에서는 항목이비었다는 메세지.
    res.status(400).send({ message: "Bad Request" });
  } else {
    users
      .findOrCreate({
        where: { email: userInfo.email },
        defaults: { password: userInfo.password, nickname: userInfo.nickname },
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
          res.status(409).send({ message: "Email Exist" });
        }
      });
  }
};
