const router = require("express").Router();

const hospitalUpload = require("../controllers/hospital/upload");
const hospitalInfo = require("../controllers/hospital/info");
const hospitalModify = require("../controllers/hospital/modify");
const hospitalDelete = require("../controllers/hospital/delete");

router.post("/upload", hospitalUpload);
router.post("/info", hospitalInfo);
router.put("/modify", hospitalModify);
router.delete("/", hospitalDelete);

module.exports = router;
