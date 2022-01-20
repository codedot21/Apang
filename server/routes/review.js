const router = require("express").Router();

const reviewUpload = require("../controllers/review/upload");
const reviewInfo = require("../controllers/review/info");
const reviewModify = require("../controllers/review/modify");
const reviewDelete = require("../controllers/review/delete");

router.post("/upload", reviewUpload);
router.post("/info", reviewInfo);
router.put("/modify", reviewModify);
router.delete("/", reviewDelete);

module.exports = router;
