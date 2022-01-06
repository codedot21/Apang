const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../client/src/storage/", "uploads"),
  filename: function (req, file, cb) {
    fileName = file.originalname;
    console.log("들어왔나?", file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = (req, res) => {
  // console.log(req.cookies.jwt);
  // console.log(req.body);

  const userInfo = isAuthorized(req);
  // console.log("userInfo : ", userInfo);
  if (req.body.password === undefined) {
    try {
      let upload = multer({
        storage: storage,
      }).single("apang");

      upload(req, res, function (err) {
        // console.log("req : ", JSON.stringify(req.body.nickname));
        let nickname = JSON.stringify(req.body.nickname);
        nickname = nickname.replaceAll('"', "");
        // console.log("nickname : ", nickname);
        // console.log(userInfo.id);
        console.log("req : ", req);
        console.log("req.file : ", req.file);
        let filename = req.file.filename;
        if (!req.file) {
          // console.log("이거?", req.file);
          return res.send("이미지를 올려주세요");
        } else if (err instanceof multer.MulterError) {
          return res.send(err);
        } else if (err) {
          return res.send(err);
        }

        // nickname값이 '' 빈문자열이라면 이미지만 수정한다는 뜻임 그러므로 프로필이미지만 수정을 해줌.
        if (nickname === "") {
          users.update(
            {
              profile_img: filename,
            },
            {
              where: {
                id: userInfo.id,
              },
            }
          );
          res.status(200).send({ message: "닉네임 수정 완료" });
          // 그게 아니라면 닉네임도 같이 수정을 함.
        } else {
          // 먼저 바꾼 닉네임이 존재하는지 일반유저 테이블에 찾아본다.
          // const isExist = users.findOne({
          //   where: {
          //     nickname: nickname,
          //   },
          // });
          // // 해당 닉네임을 가진 유저가 존재하지 않는다면 닉네임과 프로필을 수정해준다.
          // if (!isExist) {
          users.update(
            {
              profile_img: filename,
              nickname: nickname,
            },
            {
              where: {
                id: userInfo.id,
              },
            }
          );
          res.status(200).send({ message: "닉네임, 프로필사진 수정 완료" });
          // 그렇지 않으면 (닉네임이 존재하면)
          // } else {
          //   // 409에러로 이미존재한다는 에러를 띄워준다.
          //   res.status(409).send({ message: "닉네임이 존재합니다." });
          // }
        }
      });
    } catch (err) {
      console.log(err);
    }
    // 여기서부터는 비밀번호 변경
  } else {
    // 현재비밀번호도 입력하기 때문에 현재비밀번호와 유저아이디를 가진사람을 찾아준다.
    const user = users.findOne({
      where: {
        id: userInfo.id,
        password: req.body.password,
      },
    });
    // 여기서 user가 false라는것은 비밀번호가 일치하지 않기때문에 비밀번호가 맞지않다는 에러를 띄워준다.
    if (!user) {
      res.status(401).send({ message: "비밀번호가 맞지 않습니다." });
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
};
