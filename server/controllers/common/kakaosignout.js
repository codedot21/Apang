const axios = require("axios");

module.exports = (req, res) => {
  //   console.log(req.body.accessToken);
  //   const token = req.body.accessToken;
  //   axios.post("https://kapi.kakao.com/v1/user/logout", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "content-type": "application/x-www-form-urlencoded",
  //     },
  //   });
  console.log(req.body.userid);
};
