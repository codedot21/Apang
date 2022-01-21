const { hospital } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../client/public/", "hospitals"),
  filename: function (req, file, cb) {
    fileName = file.originalname;
    console.log("들어왔나?", file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = async (req, res) => {
  try {
    const accessTokenData = isAuthorized(req);
    console.log("accesstoken모야", accessTokenData);
    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "토큰이 유효하지 않음" });
    } else if (accessTokenData) {
      let upload = multer({
        storage: storage,
      }).single("hospital_img");

      upload(req, res, function (err) {
        let filename = req.file.filename;
        console.log("filename은?", filename);
        if (!req.file) {
          return res.send("병원 사진을 올려주세요");
        } else if (err instanceof multer.MulterError) {
          return res.send(err);
        } else if (err) {
          return res.send(err);
        }
        hospital
          .create({
            hospital_name: req.body.hospital_name,
            hospital_img: filename,
          })
          .then(() => {
            res.status(201).send({ message: "병원 정보 등록 성공" });
          });
      });
    }
  } catch (err) {
    console.log(err);
  }
};
