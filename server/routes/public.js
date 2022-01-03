const router = require("express").Router();

const publicSignup = require("../controllers/public/signup");
const publicUserinfo = require("../controllers/public/userinfo");
const publicProfile = require("../controllers/public/profile");
//signup, userinfo

router.post("/signup", publicSignup);
router.get("/userinfo", publicUserinfo);
router.put("/profile", publicProfile);

module.exports = router;
