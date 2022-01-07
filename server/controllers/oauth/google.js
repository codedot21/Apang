const axios = require("axios");
const jwtDecode = require("jwt-decode");
const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

module.exports = async (req, res) => {
  console.log("이이", req.body);

  const decoded = await axios
    .post("https://oauth2.googleapis.com/token", {
      client_id: clientID,
      client_secret: clientSecret,
      code: req.body.authorizationCode,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:3000",
    })
    .then((data) => {
      const id_token = data.data.id_token;
      const userInfo = jwtDecode(id_token);
      console.log(userInfo);
      // return userInfo;
      res.status(200).send({
        data: userInfo,
      });
      // console.log(res.data);
      // access_token = res.data.access_token;
      // id_token = res.data.id_token;
      // res.status(200).json({
      //   accessToken: access_token,
      //   idToken: id_token,
      // });
      // 없어도 됨
      // .then((res) => {
      //   res.send(200)("ok");
      // });
    });
  // .catch((err) => {
  //   return err;
  // });

  // res.status(200).send({
  //   accessToken: access_token,
  //   idToken: id_token,
  // });
};
