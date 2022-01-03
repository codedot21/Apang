const router = require("express").Router();

const commonSignin = require("../controllers/common/signin");
const commonSignout = require("../controllers/common/signout");
const commonDelete = require("../controllers/common/delete");

router.post("/signin", commonSignin);
router.get("/signout", commonSignout);
router.delete("/users", commonDelete);

module.exports = router;
