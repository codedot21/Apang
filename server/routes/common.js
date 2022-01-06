const router = require("express").Router();

const commonSignin = require("../controllers/common/signin");
const commonSignout = require("../controllers/common/signout");
const kakaoSignout = require("../controllers/common/kakaosignout");
const commonDelete = require("../controllers/common/delete");

router.post("/signin", commonSignin);
router.get("/signout", commonSignout);
router.post("/kakaosignout", kakaoSignout);
router.delete("/users", commonDelete);

module.exports = router;
