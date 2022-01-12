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
import MedicalDetail from "./pages/MedicalDetail.js";

import axios from "axios";

function App() {
  console.log("App.js랜더링");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [qnaInfo, setqnaInfo] = useState(""); //qna 전부 가져오는것
  const [auth, setAuth] = useState("");
  const [qnaDetail, setqnaDetail] = useState("");

  // map 상태
  const [medical, setMedical] = useState("");

  //map 함수

  const medicalhandling = (value) => {
    setMedical(value);
    console.log(medical);
  };

  // 병원 정보
  const [medicalInfo, setMedicalInfo] = useState("");

  // 정보 가져오기
  const medicalInfoHandling = (value) => {
    setMedicalInfo(value);
    console.log(medicalInfo);
  };

  // useEffect(() => {
  //   setUserInfo(localStorage.getItem("userInfo"));
  // }, []);
  const isAuthenticated = () => {
    //쿠키에 jwt가 있는지 없는지 랜더링될떄마다 확인하는 함수..?
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
          uploadSuccess();
          // navigate("/");
        });
    } else if (authnumber === 1) {
      axios
        .get("http://localhost:80/doctor/userinfo", {
          withCredentials: true, //이게 없으니까 cookies안에 토큰이 없다.
        })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data.userInfo);
          setAuth(res.data.userInfo.auth);
          setIsLogin(true);
          uploadSuccess();
          // navigate("/");
        });
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
            console.log("user : ", user);
            console.log(user.accessToken);
            localStorage.setItem("userid", user.data.id);
            console.log(localStorage.getItem("userid"));
            const userInfo = {
              id: user.data.id,
              nickname: user.data.properties.nickname,
              email: user.data.kakao_account.email,
            };
            console.log(userInfo);
            setUserInfo(userInfo);
            setIsLogin(true);
            uploadSuccess();
            navigate("/");
          } else {
            window.alert("로그인에 실패하였습니다.");
          }
        });
    }
    uploadSuccess();
  };

  const handleResponseSuccess = (authnumber) => {
    localStorage.setItem("auth", authnumber);
    isAuthenticated();
  };

  const uploadSuccess = () => {
    console.log("uploadsuccess실행됨?");
    axios
      .post(
        "http://localhost:80/qna/info",
        { kakao_userid: localStorage.getItem("userid") },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res.data.qnaInfo는모야?", res.data.qnaInfo);
        setqnaInfo(res.data.qnaInfo);
      });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);
  //이게 있으면 왜 로그인이 유지되지? 랜더링될때 한번만 실행. 없으면 새로고침하면 로그인풀림.

  // useEffect(() => {
  //   uploadSuccess();
  // }, []);

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
        localStorage.removeItem("accessToken");
        alert("로그아웃이 되었습니다.");
        navigate("/");
      });
  };

  const handleQnaInfo = (qna) => {
    console.log(qna);
    setqnaDetail(qna);
  };
  // const getGoogleToken = async (authorizationCode) => {
  //   await axios({
  //     url: "http://localhost:4000/oauth/google",
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
        <Route path="/" element={<Main medicalhandling={medicalhandling} />} />
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
              handleQnaInfo={handleQnaInfo}
              uploadSuccess={uploadSuccess}
              qnaInfo={qnaInfo}
              isLogin={isLogin}
            />
          }
        />

        <Route path="/qnadetail" element={<QnaDetail isLogin={isLogin} />} />
        <Route
          path="/medicallist"
          element={
            <Medical
              medical={medical}
              medicalInfoHandling={medicalInfoHandling}
            />
          }
        />
        <Route
          path="/qna/detail/:id"
          element={<QnaDetail isLogin={isLogin} qnaDetail={qnaDetail} />}
        />

        <Route
          path="/medicaldetail"
          element={<MedicalDetail medicalInfo={medicalInfo} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
