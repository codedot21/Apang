const router = require("express").Router();

const hashtagUpload = require("../controllers/hashtag/upload.js");

router.post("/upload", hashtagUpload);

module.exports = router;
