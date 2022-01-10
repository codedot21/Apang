const router = require("express").Router();

const kakaoLogin = require("../controllers/oauth/kakao.js");
const googleLogin = require("../controllers/oauth/google.js");

router.post("/kakao", kakaoLogin);
router.post("/google", googleLogin);
module.exports = router;
