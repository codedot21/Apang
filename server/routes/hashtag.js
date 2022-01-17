const router = require("express").Router();

const hashtagUpload = require("../controllers/hashtag/upload.js");
const qnaHashtag = require("../controllers/hashtag/qna_hashtag.js");

router.post("/upload", hashtagUpload);
router.post("/qnahashtag", qnaHashtag);

module.exports = router;
