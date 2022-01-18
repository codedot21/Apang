import axios from "axios";

const Kakao = ({ LoginHandler }) => {
  const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받음.

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const makeFormData = (params) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });

    return searchParams;
  };

  axios({
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    url: "https://kauth.kakao.com/oauth/token", //카카오로부터 토큰받아오기
    data: makeFormData({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
    }),
  }).then((res) => {
    const ACCESS_TOKEN = res.data.access_token;
    localStorage.setItem("accessToken", ACCESS_TOKEN);
    localStorage.setItem("auth", 4);
    LoginHandler();
  });
  return <></>;
};

export default Kakao;
