const { hashtag } = require("../../models");

module.exports = async (req, res) => {
  try {
    console.log("req.body.tags는?", req.body.tags);
    for (let i = 0; i < req.body.tags.length; i++) {
      hashtag
        .findOrCreate({
          where: { hashtag: req.body.tags[i] },
        })
        .then(([hashtag, created]) => {
          if (created) {
            // return res.status(201).send({ message: "hashtag Ok" });
            return;
          }
          // 중복되는 이메일이 있을때 409상태코드와 Eamil Exist메세지를 보내줌.
          else {
            // return res.send({ error: 2, message: "hashtag Exist" });
            return;
          }
        });
    }
  } catch (err) {
    console.log(err);
  }
};

