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
    }
    console.log("tagArr : ", tagArr);
    res.send({ data: tagArr, message: "해시태그 등록 성공" });
  } catch (err) {
    console.log(err);
  }
};
