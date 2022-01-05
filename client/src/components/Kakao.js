import axios from "axios";
import { useNavigate } from "react-router-dom";

const Kakao = ({ LoginHandler }) => {
  const navigate = useNavigate();
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
    url: "https://kauth.kakao.com/oauth/token",
    data: makeFormData({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
    }),
  }).then((res) => {
    const ACCESS_TOKEN = res.data.access_token;
    axios
      .post("http://localhost:80/oauth/kakao", {
        access_token: ACCESS_TOKEN,
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          const user = res.data;
          console.log("user : ", user.data.id);
          console.log(user.accessToken);
          localStorage.setItem("userid", user.data.id);
          const userInfo = {
            id: user.data.id,
            nickname: user.data.properties.nickname,
            email: user.data.kakao_account.email,
          };
          LoginHandler(userInfo);
          navigate("/");
        } else {
          window.alert("로그인에 실패하였습니다.");
        }
      });
  });
  return <></>;
};

export default Kakao;
