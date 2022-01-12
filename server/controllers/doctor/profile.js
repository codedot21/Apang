const { doctors } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../client/public/", "uploads"),
  filename: function (req, file, cb) {
    fileName = file.originalname;
    console.log("들어왔나?", file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = (req, res) => {
  const userInfo = isAuthorized(req);
  console.log(userInfo);
  if (userInfo.auth === 0) {
    const id = Object.keys(req.body).toString();
    console.log(id);
    doctors.update(
      {
        agree: "true",
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send({ message: "의사 신청 완료" });
  } else {
    if (req.body.password === undefined) {
      try {
        let upload = multer({
          storage: storage,
        }).single("apang");

        upload(req, res, function (err) {
          const name = req.body.name;
          const hospital = req.body.hospital;
          const filename = req.file.filename;
          if (!req.file) {
            return res.send("이미지를 올려주세요");
          } else if (err instanceof multer.MulterError) {
            return res.send(err);
          } else if (err) {
            return res.send(err);
          }
          if (name === "" && hospital === "") {
            doctors.update(
              {
                profile_img: filename,
              },
              {
                where: {
                  id: userInfo.id,
                },
              }
            );
            res.status(200).send({ message: "의사 프로필 수정 완료" });
          } else {
            doctors.update(
              {
                profile_img: filename,
                name: name,
                hospital: hospital,
              },
              {
                where: {
                  id: userInfo.id,
                },
              }
            );
            res
              .status(200)
              .send({ message: "이름, 병원명, 프로필사진 수정 완료" });
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      const user = doctors.findOne({
        where: {
          id: userInfo.id,
          password: req.body.password,
        },
      });
      if (!user) {
        res.status(401).send({ message: "비밀번호가 맞지 않습니다." });
      } else {
        doctors.update(
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
  }
};
