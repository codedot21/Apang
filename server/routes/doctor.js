const router = require("express").Router();

const doctorSignup = require("../controllers/doctor/signup");
const doctorUserinfo = require("../controllers/doctor/userinfo");
const doctorProfile = require("../controllers/doctor/profile");

router.post("/signup", doctorSignup);
router.get("/userinfo", doctorUserinfo);
router.post("/profile", doctorProfile);

module.exports = router;
