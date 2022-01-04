import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.js";
import Main from "./pages/Main.js";
import AuthPage from "./pages/AuthPage.js";
import UserMypage from "./pages/UserMypage.js";
import DocMypage from "./pages/DocMypage.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/mypage/publicprofile" element={<UserMypage />} />
        <Route path="/mypage/doctorprofile" element={<DocMypage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
