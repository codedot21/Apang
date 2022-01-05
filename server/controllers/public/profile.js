const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../client/src/storage/", "uploads"),
  filename: function (req, file, cb) {
    console.log("들어왔나?", file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = (req, res) => {
  // // body 내용 확인
  // // console.log(req.body);
  // // 권한이 유효한지 먼저 확인하기
  // const accessToken = isAuthorized(req);
  // // 토큰이 유효하지 않을 때
  // if (!accessToken) {
  //   res.status(401).send({ message: "Invalid Token" });
  // }
  // // 토큰이 유효할 때
  // else {
  //   // 닉네임이 동일한지 여부를 판단하기위해 수정한 닉네임을 조건으로 findOne 함수를 써서 찾아본다.
  //   const userInfo = users.findOne({
  //     where: {
  //       nickname: accessToken.nickname,
  //     },
  //   });
  //   // 바꾸려는 닉네임으로 유저인포가 이미 존재하면 동일한 닉네임이 존재하므로 거절 메세지
  //   if (userInfo) {
  //     res.status(409).send({ message: "Nickname Exist" });
  //   }
  //   // 없다면 닉네임을 포함해서 이미지까지 수정을 해준다.
  //   // 닉네임, 프로필 사진을 수정할 때 바꾸든 안바꾸든 데이터 다같이 넘겨주기 수정할거라면 수정할 데이터로 그게아니면 원래 값으로 데이터를 넘겨주기.
  //   else {
  //     // 새 비밀번호값이 ''이거나 undefined면 닉네임과 프로필수정버튼을 누른게 되니 그 두가지만 수정해준다.
  //     if (
  //       accessToken.newPassowrd === "" ||
  //       accessToken.newPassword === undefined
  //     ) {
  //       users
  //         .update(
  //           {
  //             nickname: accessToken.nickname,
  //             profile_img: accessToken.profile_img,
  //           },
  //           {
  //             where: {
  //               id: accessToken.id,
  //             },
  //           }
  //         )
  //         .then(
  //           // 여기서 userInfo는 위의 userInfo하고 다른거임 여기서 유저인포는 그냥 클라이언트에다가 userInfo라는 변수에 담아 보내주기위한 key값임.
  //           res.status(200).send({
  //             message: "Nickname, Profile_img Modify Ok",
  //             userInfo: accessToken,
  //           })
  //         );
  //     }
  //     // 그렇지않고 새 비밀번호값이 있으면 비밀번호 수정을 누른게 되니 비밀번호만 바꿔주면 된다.
  //     else if (accessToken.newPassword) {
  //       users
  //         .update(
  //           {
  //             // 새로운 비밀번호는 newPassword로 담을 예정 => 클라이언트랑 상의하고 바꿀예정
  //             password: accessToken.newPassword,
  //           },
  //           {
  //             where: {
  //               id: accessToken.id,
  //             },
  //           }
  //         )
  //         .then(
  //           res
  //             .status(200)
  //             .send({ message: "Password Modify Ok", userInfo: accessToken })
  //         );
  //     }
  //   }
  // }
  try {
    let upload = multer({
      storage: storage,
    }).single("apang");

    upload(req, res, function (err) {
      if (!req.file) {
        console.log("이거?", req.file);
        return res.send("이미지를 올려주세요");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
