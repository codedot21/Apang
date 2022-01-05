import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Nav from "./components/Nav.js";
import Main from "./pages/Main.js";
import AuthPage from "./pages/AuthPage.js";
import UserMypage from "./pages/UserMypage.js";
import DocMypage from "./pages/DocMypage.js";
import Footer from "./components/Footer.js";
import Kakao from "./components/Kakao.js";

import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // const LoginHandler = (data) => {
  //   KakaoLogin(data);
  // };

  // const KakaoLogin = (data) => {
  //   setUserInfo(data);
  //   console.log(userInfo);
  //   setIsLogin(true);
  // };

  // useEffect(() => KakaoLogin(), [userInfo]);

  const handleLogout = () => {
    axios
      .post("http://localhost:80/common/kakaosignout", {
        userid: localStorage.getItem("userid"),
      })
      .then((res) => {
        setUserInfo("");
        setIsLogin(false);
        alert("로그아웃이 되었습니다.");
        navigate("/");
      });
  };

  return (
    <>
      <Nav isLogin={isLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/mypage/publicprofile" element={<UserMypage />} />
        <Route path="/mypage/doctorprofile" element={<DocMypage />} />
        <Route path="/oauth/callback/kakao" element={<Kakao />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
