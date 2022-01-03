const router = require("express").Router();

const publicRouter = require("./public");
const commentsRouter = require("./comments");
const doctorRouter = require("./doctor");
const qnaRouter = require("./qna");
const reviewRouter = require("./review");
const commonRouter = require("./common");

router.use("/public", publicRouter);
router.use("/comments", commentsRouter);
router.use("/doctor", doctorRouter);
router.use("/qna", qnaRouter);
router.use("/review", reviewRouter);
router.use("/common", commonRouter);

module.exports = router;
