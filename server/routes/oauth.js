const router = require("express").Router();

const kakaoLogin = require("../controllers/oauth/kakao.js");

router.post("/kakao", kakaoLogin);

module.exports = router;
