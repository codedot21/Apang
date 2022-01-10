const axios = require("axios");
const formUrlEncoded = (x) =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, "");
const KAKAO_ADMIN = "a663f5fefe8ce0a5105b25bb1191bcf5";

module.exports = (req, res) => {
  // console.log("들어오니?", req.body);
  //이걸 그냥 if(req.body.auth)로 해버리니 0이나 없는거나 다 false로 받는다.
  if (req.body.auth === 0 || req.body.auth === 1 || req.body.auth === 2) {
    res.clearCookie("jwt").status(200).send("SignOut Ok");
  } else {
    console.log(req.body.userid);
    const userid = req.body.userid;
    axios.post(
      "https://kapi.kakao.com/v1/user/logout",
      formUrlEncoded({
        target_id: userid,
        target_id_type: "user_id",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: `KakaoAK ${KAKAO_ADMIN}`,
        },
      }
    );
    res.status(205).send({
      message: "Kakao Logout Ok",
    });
  }
};
// cookie clear?clean?
