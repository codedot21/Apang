const { reviews } = require("../../models");
const path = require("path");
const fs = require("fs");

module.exports = async (req, res) => {
  console.log(req.body);
  const receipts = await reviews.findOne({
    where: {
      id: req.body.review_id,
    },
  });
  console.log(receipts);
  const img = receipts.dataValues.receipts_img;
  fs.unlink(
    path.join(__dirname, "../../../client/public/receipts/", img),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  await reviews.destroy({
    where: {
      id: req.body.review_id,
    },
  });
  res.status(200).send({
    message: "리뷰 삭제 완료",
  });
};
