const { hospital } = require("../../models");

module.exports = async (req, res) => {
  const hospitalInfo = await hospital.findOne({
    where: {
      hospital_name: req.body.hospital_name,
    },
  });
  if (!hospitalInfo) {
    res.send({ status: 400, message: "병원사진이 아직 없습니다." });
  } else {
    res.status(200).send({ hospital_img: hospitalInfo.hospital_img });
  }
};
