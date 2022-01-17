const { hashtag } = require("../../models");

module.exports = async (req, res) => {
  let tagArr = [];
  try {
    console.log("req.body.tags는?", req.body.tags);
    for (let i = 0; i < req.body.tags.length; i++) {
      tagArr.push(req.body.tags[i]);
      hashtag
        // .findOrCreate({
        //   where: { hashtag: req.body.tags[i] },
        // })
        .create({
          hashtag: req.body.tags[i],
        });
      // .then(([hashtag, created]) => {
      //   if (created) {
      //     // return res.status(201).send({ message: "hashtag Ok" });
      //     // console.log("fasfsad : ", hashtag);
      //     // return;
      //   }
      //   // 중복되는 이메일이 있을때 409상태코드와 Eamil Exist메세지를 보내줌.
      //   else {
      //     // return res.send({ error: 2, message: "hashtag Exist" });
      //     return;
      //   }
      // });
    }
    console.log("tagArr : ", tagArr);
    res.send({ data: tagArr });
  } catch (err) {
    console.log(err);
  }
};
