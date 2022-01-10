const { isAuthorized } = require("../tokenFunctions");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  // console.log("req가 여기로 오니?", req);
  const accessTokenData = isAuthorized(req);

  if (!accessTokenData) {
    res.status(401).send({ data: null, message: "Not Authorized" });
  } else {
    res.status(200).send({ data: { userInfo: accessTokenData } });
  }
};
