const axios = require("axios");

module.exports = (req, res) => {
  console.log(req);
  // const token = req.body.access_token;
  // axios
  //   .get("https://kapi.kakao.com/v2/user/me", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //     },
  //   })
  //   .then((data) => {
  //     res.status(200).send({ data: data.data, message: "Kakao Ok" });
  //   });
};

// module.exports = (req, res) => {
//   res.clearCookie("jwt").status(200).send("SignOut Ok");
// };
//cookie clear?clean?
