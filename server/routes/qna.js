const router = require("express").Router();

const qnaUpload = require("../controllers/qna/upload");
const qnaInfo = require("../controllers/qna/info");
const qnaModify = require("../controllers/qna/modify");
const qnaDelete = require("../controllers/qna/delete");

router.post("/upload", qnaUpload);
router.get("/info", qnaInfo);
router.put("/modify", qnaModify);
router.delete("/", qnaDelete);

module.exports = router;
