const { doctors } = require("../../models");
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
  //   if (
  //     accessToken.newPassword === "" ||
  //     accessToken.newPassword === undefined
  //   ) {
  //     doctors
  //       .update(
  //         {
  //           name: accessToken.name,
  //           profile_img: accessToken.profile_img,
  //           hospital: accessToken.hospital,
  //         },
  //         {
  //           where: {
  //             id: accessToken.id,
  //           },
  //         }
  //       )
  //       .then(
  //         res
  //           .status(200)
  //           .send({ message: "DoctorInfo Modify Ok", userInfo: accessToken })
  //       );
  //   } else if (accessToken.newPassword) {
  //     doctors
  //       .update(
  //         {
  //           password: accessToken.newPassword,
  //         },
  //         {
  //           where: {
  //             id: accessToken.id,
  //           },
  //         }
  //       )
  //       .then(
  //         res
  //           .status(200)
  //           .send({ message: "Password Modify Ok", userInfo: accessToken })
  //       );
  //   }
  // }
  try {
    let upload = multer({
      storage: storage,
    }).single("apang");

    upload(req, res, function (err) {
      if (!req.file) {
        // console.log("이거?", req.file);
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
