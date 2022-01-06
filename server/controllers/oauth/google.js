const axios = require("axios");
const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

module.exports = (req, res) => {
  console.log(req.body);
  axios
    .post("https://oauth2.googleapis.com/token", {
      client_id: clientID,
      client_secret: clientSecret,
      code: req.body.authorizationCode,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:3000",
    })
    .then((res) => {
      console.log(res.data);
      access_token = res.data.access_token;
      id_token = res.data.id_token;
      res.status(200).json({
        accessToken: access_token,
        idToken: id_token,
      });
    })
    .catch((err) => {
      return err;
    });
};
