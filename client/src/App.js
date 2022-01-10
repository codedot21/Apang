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

import axios from "axios";

function App() {
  console.log("App.js랜더링");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  // const [accessToken, setAccessToken] = useState("");
  const [auth, setAuth] = useState("");

  // useEffect(() => {
  //   setUserInfo(localStorage.getItem("userInfo"));
  // }, []);
  const isAuthenticated = () => {
    //쿠키에 jwt가 있는지 없는지 랜더링될떄마다 확인하는 함수..?
    // const authnumber = localStorage.getItem("auth");
    const authnumber = parseInt(localStorage.getItem("auth"));
    console.log(authnumber);
    if (authnumber === 2 || authnumber === 0) {
      axios
        .get("http://localhost:80/public/userinfo", {
          withCredentials: true, //이게 없으니까 cookies안에 토큰이 없다.
        })
        .then((res) => {
          //console.log(res);
          console.log(res.data.userInfo);
          setUserInfo(res.data.userInfo);
          setAuth(res.data.userInfo.auth); //nav에 내려주기 위해
          setIsLogin(true);
          // navigate("/");
        });
    } else if (authnumber === 1) {
      axios
        .get("http://localhost:80/doctor/userinfo", {
          withCredentials: true, //이게 없으니까 cookies안에 토큰이 없다.
        })
        .then((res) => {
          console.log(res.data.userInfo);
          setUserInfo(res.data.userInfo);
          setAuth(res.data.userInfo.auth);
          setIsLogin(true);
          // navigate("/");
        });
    }
  };

  const handleResponseSuccess = (authnumber) => {
    localStorage.setItem("auth", authnumber);
    isAuthenticated();
  };
  // const handleResponseSuccess = (authnumber) => {
  //   isAuthenticated(authnumber);
  // };

  useEffect(() => {
    isAuthenticated();
  }, []); //이게 있으면 왜 로그인이 유지되지? 랜더링될때 한번만 실행. 없으면 새로고침하면 로그인풀림.

  const LoginHandler = (data) => {
    setUserInfo(data);
    console.log(userInfo);
    setIsLogin(true);
  };

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:80/common/signout",
        {
          auth: auth,
          userid: localStorage.getItem("userid"),
          // credentials: "include",
        },
        { withCredentials: true } //서버-클라이언트 쿠키연결.
      )
      .then((res) => {
        console.log("록아웃되니?");
        setUserInfo(null);
        setIsLogin(false);
        // setAccessToken("");
        localStorage.removeItem("userid");
        localStorage.removeItem("auth");
        alert("로그아웃이 되었습니다.");
        navigate("/");
      });
    // // .catch(() =>
    // axios
    //   .post("http://localhost:80/common/kakaosignout", {
    //     userid: localStorage.getItem("userid"),
    //   })
    //   .then((res) => {
    //     setUserInfo("");
    //     setIsLogin(false);
    //     localStorage.removeItem("userid");
    //     localStorage.removeItem("ACCESS_TOKEN");
    //     alert("로그아웃이 되었습니다.");
    //     navigate("/");
    //   });
    // );
  };

  const getGoogleToken = async (authorizationCode) => {
    await axios({
      url: "http://localhost:80/oauth/google",
      method: "post",
      data: { authorizationCode },
      withCredentials: true,
    }).then((res) => {
      console.log("여기", res.data);
      console.log("여기", res.data.data.email);
      console.log("여기", res.data.data.name);
    });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    console.log(`url ${url}`);
    const authorizationCode = url.searchParams.get("code");
    console.log(`authorizationCode ${authorizationCode}`);
    if (authorizationCode) {
      getGoogleToken(authorizationCode);
    }
  }, []);

  return (
    <>
      <Nav
        isLogin={isLogin}
        auth={auth}
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
        <Route path="/reviewpage" element={<ReviewPage />} />
        <Route
          path="/oauth/callback/kakao"
          element={<Kakao LoginHandler={LoginHandler} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
