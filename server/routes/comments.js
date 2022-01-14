const router = require("express").Router();

const commentsUpload = require("../controllers/comments/upload");
const commentsInfo = require("../controllers/comments/info");
const commentsModify = require("../controllers/comments/modify");
const commentsDelete = require("../controllers/comments/delete");

router.post("/upload", commentsUpload);
router.post("/info", commentsInfo);
router.put("/modify", commentsModify);
router.delete("/", commentsDelete);

module.exports = router;
