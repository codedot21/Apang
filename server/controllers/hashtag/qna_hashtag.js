const { qna_hashtag, hashtag } = require("../../models");

module.exports = async (req, res) => {
  try {
    console.log("해시태그 : ", req.body);
    let hashtagId = [];
    for (let i = 0; i < req.body.hashtag.length; i++) {
      let id = await hashtag.findOne({
        where: {
          hashtag: req.body.hashtag[i],
        },
      });
      console.log("id : ", id.dataValues.id);
      hashtagId.push(id.dataValues.id);
    }
    // console.log("해시태그아이디배열 : ", hashtagId);

    for (let i = 0; i < hashtagId.length; i++) {
      await qna_hashtag.create({
        qna_id: req.body.qnaId,
        hashtag_id: hashtagId[i],
      });
    }
    res.status(201).send({ message: "QnA 해시태그 등록 성공" });
  } catch (err) {
    console.log(err);
  }
};
