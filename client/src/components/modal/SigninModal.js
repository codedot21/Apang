import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import kakao from "../../images/kakao.png";
import google from "../../images/google.png";
import { KAKAO_AUTH_URL } from "../OAuthKakao";
import axios from "axios";

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 30rem;
  max-height: 25rem;
  border-radius: 0.3rem;
  background-color: #fbf3ed;
  overflow: hidden;
`;

export const LoginHeader = styled.div`
  position: relative;
  padding: 26px 64px 16px 60px;
  background-color: #fbf3ed;
  font-weight: 500;
  color: black;
  font-size: 2rem;
`;

export const LoginBody = styled.div`
  padding: 1rem;
  color: black;
  background-color: #fbf3ed;

  & > div {
    padding: 0.3rem 0.7rem 0.7rem 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > input {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    width: 17rem;
    height: 2rem;
    font-size: 1rem;
    border: 0.1rem solid #dee2e6;
    border-radius: 30px;
  }
`;

export const LoginFooter = styled.div`
  padding: 0.1rem 1rem 1rem 1rem;
  background-color: #fbf3ed;
`;

export const SocialLoginHeader = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #fbf3ed;
`;

// export const SocialLogin = styled(Link)``;
export const SocialLogin = styled.a``;

export const Button = styled.button`
  margin: 0.7rem 2rem;
  background: #6ec5ff;
  white-space: nowrap;
  padding: 0.5rem 3rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  &:hover {
    background: #fff;
    background-color: #002171;
  }
`;

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  text-align: center;
  padding: 8%;
  border: 8%;
`;

function SigninModal({ open, close, handleResponseSuccess }) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (key) => (e) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value,
    });
  };

  const handleSignIn = () => {
    axios
      .post("http://localhost:4000/common/signin", userInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("auth번호!", res.data.data.auth);
        handleResponseSuccess(res.data.data.auth);
        console.log("로그인 완료");
        close();
      });
  };
  return open ? (
    <ModalBackGround onClick={close}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <LoginHeader>로그인</LoginHeader>
        <LoginBody>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={handleInputChange("email")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handleInputChange("password")}
            />
          </div>
          <Button onClick={handleSignIn}>로그인</Button>
        </LoginBody>
        <LoginFooter>
          <SocialLoginHeader>소셜로그인</SocialLoginHeader>
          <SocialLogin href={KAKAO_AUTH_URL} onClick={close}>
            <img src={kakao} alt="kakaologin" width="48rem"></img>
          </SocialLogin>
          <span> </span>
          <SocialLogin href="/" onClick={close}>
            <img src={google} alt="googlelogin" width="48rem"></img>
          </SocialLogin>
        </LoginFooter>
      </ModalBox>
    </ModalBackGround>
  ) : null;
}

export default SigninModal;
