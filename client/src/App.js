import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Nav from "./components/Nav.js";
import Main from "./pages/Main.js";
import AuthPage from "./pages/AuthPage.js";
import UserMypage from "./pages/UserMypage.js";
import DocMypage from "./pages/DocMypage.js";
import ReviewPage from "./pages/ReviewPage.js";
import Footer from "./components/Footer.js";
import Kakao from "./components/Kakao.js";
import QnaPage from "./pages/QnaPage.js";
import QnaDetail from "./pages/QnaDetail.js";
import ScrollTop from "./components/Scroll.js";
import Medical from "./pages/Medical.js";
import Swal from "sweetalert2";
import { message } from "./modules/message";

import axios from "axios";

function App() {
  console.log("App.js랜더링");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null); //사용자 정보
  const [auth, setAuth] = useState("");
  // const [qnaDetail, setqnaDetail] = useState(null);

  const isAuthenticated = () => {
    const authnumber = parseInt(localStorage.getItem("auth"));
    //< --일반인 로그인 -->
    if (authnumber === 2 || authnumber === 0) {
      axios
        .get("http://localhost:80/public/userinfo", {
          withCredentials: true, //이게 없으니까 cookies안에 토큰이 없다.
        })
        .then((res) => {
          setUserInfo(res.data.userInfo);
          setAuth(res.data.userInfo.auth); //nav에 내려주기 위해
          setIsLogin(true);
          // navigate("/");
        });

      //<-- 의사 로그인 -->
    } else if (authnumber === 1) {
      axios
        .get("http://localhost:80/doctor/userinfo", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data.userInfo);
          setAuth(res.data.userInfo.auth);
          setIsLogin(true);
          // navigate("/");
        });

      // <-- 카카오 로그인 -->
    } else if (isNaN(authnumber)) {
      //parseInt(null)이 들어가면 값이 NaN이 나오더라.
      axios
        .post("http://localhost:80/oauth/kakao", {
          //서버로부터 사용자 정보 받아오기
          access_token: localStorage.getItem("accessToken"),
        })
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            const user = res.data;
            localStorage.setItem("userid", user.data.id);
            console.log(localStorage.getItem("userid"));
            const userInfo = {
              id: user.data.id,
              nickname: user.data.properties.nickname,
              email: user.data.kakao_account.email,
            };
            setUserInfo(userInfo);
            setIsLogin(true);
            navigate("/");
          } else {
            Swal.fire({
              icon: "error",
              title: "Apang 로그인",
              text: message.loginFail,
            });
          }
        });
    }
  };

  const handleResponseSuccess = (authnumber) => {
    localStorage.setItem("auth", authnumber);
    isAuthenticated();
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  const LoginHandler = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:80/common/signout",
        {
          auth: auth,
          userid: localStorage.getItem("userid"),
        },
        { withCredentials: true }
      )
      .then((res) => {
        setUserInfo(null);
        setIsLogin(false);
        // setAccessToken("");
        localStorage.removeItem("userid");
        localStorage.removeItem("auth");
        localStorage.removeItem("accessToken");
        Swal.fire({
          icon: "success",
          title: "또 만나요",
          text: "로그아웃 되었습니다",
        });
        navigate("/");
      });
  };

  // const getGoogleToken = async (authorizationCode) => {
  //   await axios({
  //     url: "http://localhost:80/oauth/google",
  //     method: "post",
  //     data: { authorizationCode },
  //     withCredentials: true,
  //   }).then((res) => {
  //     console.log("여기", res.data);
  //     console.log("여기", res.data.data.email);
  //     console.log("여기", res.data.data.name);
  //   });
  // };

  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   console.log(`url ${url}`);
  //   const authorizationCode = url.searchParams.get("code");
  //   console.log(`authorizationCode ${authorizationCode}`);
  //   if (authorizationCode) {
  //     getGoogleToken(authorizationCode);
  //   }
  // }, []);

  return (
    <>
      <ScrollTop />
      <Nav
        isLogin={isLogin}
        auth={parseInt(localStorage.getItem("auth"))}
        handleResponseSuccess={handleResponseSuccess}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route
          path="/mypage/publicprofile"
          element={<UserMypage userInfo={userInfo} />}
        />
        <Route
          path="/mypage/doctorprofile"
          element={<DocMypage userInfo={userInfo} />}
        />
        <Route
          path="/reviewpage"
          element={<ReviewPage userInfo={userInfo} />}
        />
        <Route
          path="/oauth/callback/kakao"
          element={<Kakao LoginHandler={LoginHandler} />}
        />
        <Route
          path="/qna"
          element={
            <QnaPage
              isLogin={isLogin}
              // userInfo={userInfo}
              auth={parseInt(localStorage.getItem("auth"))}
            />
          }
        />

        <Route path="/medicallist" element={<Medical />} />
        <Route
          path="/qna/detail/:id"
          element={
            <QnaDetail
              isLogin={isLogin}
              // qnaDetail={qnaDetail}
              userInfo={userInfo}
              auth={parseInt(localStorage.getItem("auth"))}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
