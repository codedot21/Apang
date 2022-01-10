const router = require("express").Router();

const commonSignin = require("../controllers/common/signin");
const commonSignout = require("../controllers/common/signout");
const kakaoSignout = require("../controllers/common/kakaosignout");
const commonDelete = require("../controllers/common/delete");
const commonAuth = require("../controllers/common/auth");

router.post("/signin", commonSignin);
router.post("/signout", commonSignout);
router.post("/kakaosignout", kakaoSignout);
router.delete("/users", commonDelete);
router.get("/auth", commonAuth);

module.exports = router;
