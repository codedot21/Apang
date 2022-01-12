const router = require("express").Router();

const qnaUpload = require("../controllers/qna/upload");
const qnaInfo = require("../controllers/qna/info");
const qnaModify = require("../controllers/qna/modify");
const qnaDelete = require("../controllers/qna/delete");
const qnaDetail = require("../controllers/qna/detail");

router.post("/upload", qnaUpload);
router.post("/info", qnaInfo);
router.put("/modify", qnaModify);
router.delete("/", qnaDelete);
router.get("/detail/:id", qnaDetail);

module.exports = router;
