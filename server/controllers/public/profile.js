const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // console.log("s3이미지 : ", req.body);
  try {
    // console.log(req.cookies.jwt);
    // console.log("req.body : ", req);

    const userInfo = isAuthorized(req);
    // console.log("userInfo : ", userInfo);
    if (req.body.password === undefined) {
      if (req.body.onlyNickname) {
        await users.update(
          {
            nickname: req.body.onlyNickname,
          },
          {
            where: {
              id: userInfo.id,
            },
          }
        );
        res.status(200).send({ message: "닉네임 수정 완료" });
      } else {
        // console.log("여기는 찍히나? : ", userInfo);
        const user = await users.findOne({
          where: {
            id: userInfo.id,
          },
        });
        // console.log("user : ", user);

        // console.log("req : ", JSON.stringify(req.body.nickname));
        let nickname = JSON.stringify(req.body.nickname);
        nickname = nickname.replaceAll('"', "");

        // nickname값이 '' 빈문자열이라면 이미지만 수정한다는 뜻임 그러므로 프로필이미지만 수정을 해줌.
        if (nickname === "") {
          users.update(
            {
              profile_img: req.body.fileName,
            },
            {
              where: {
                id: userInfo.id,
              },
            }
          );
          res.status(200).send({ message: "프로필 수정 완료" });
          // 그게 아니라면 닉네임도 같이 수정을 함.
        } else {
          users.update(
            {
              profile_img: req.body.fileName,
              nickname: nickname,
            },
            {
              where: {
                id: userInfo.id,
              },
            }
          );
          res.status(200).send({ message: "닉네임, 프로필사진 수정 완료" });
        }
      }
      // 여기서부터는 비밀번호 변경
    } else {
      // 현재비밀번호도 입력하기 때문에 현재비밀번호와 유저아이디를 가진사람을 찾아준다.
      const user = await users.findOne({
        where: {
          id: userInfo.id,
          password: req.body.password,
        },
      });
      // console.log("user : ", user);
      // 여기서 user가 false라는것은 비밀번호가 일치하지 않기때문에 비밀번호가 맞지않다는 에러를 띄워준다.
      // !user가 아니라 null로 해야됨. user를 선언해서 findOne함수한것을 담은 거라서 없으면 저 변수는 Null이 되기때문에
      if (user === null) {
        res.send({ status: 401, message: "비밀번호 일치하지 않음" });
        // 그게아니라면 비밀번호가 일치하고 해당 유저아이디가 있기때문에
      } else {
        // 비밀번호를 수정해준다.
        users.update(
          {
            password: req.body.newPassword,
          },
          {
            where: {
              id: userInfo.id,
            },
          }
        );
        res.status(200).send({ message: "비밀번호 수정 완료" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
