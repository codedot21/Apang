const axios = require("axios");

module.exports = (req, res) => {
  const token = req.body.access_token;
  axios
    .get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .then((data) => {
      res.status(200).send({
        data: data.data,
        accessToken: token,
        message: "Kakao Ok",
      });
    })
    .catch(() => {
      res.status(401).send({ data: null, message: "Not Authorized" });
    });
};
