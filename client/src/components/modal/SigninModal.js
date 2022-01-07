import React, { useState } from "react";
import styled from "styled-components";
import kakao from "../../images/kakao.png";
import google from "../../images/google.png";
import { KAKAO_AUTH_URL } from "../OAuthKakao";
import { GOOGLE_AUTHORIZE_URL } from "../OAuthGoogle";
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
    font-size: 0.8rem;
    border: 0.1rem solid #dee2e6;
    border-radius: 10px;
  }
`;

export const LoginFooter = styled.div`
  padding: 0.1rem 1rem 1rem 1rem;
  background-color: #fbf3ed;
`;

export const SocialLoginHeader = styled.div`
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 1rem;
  background-color: #fbf3ed;
`;

// export const SocialLogin = styled(Link)``;
export const SocialLogin = styled.a`
  padding: 0.1rem 1rem 1rem 1rem;
`;

export const Button = styled.button`
  margin: 0.7rem 2rem;
  background: #6ec5ff;
  white-space: nowrap;
  padding: 0.4rem 7.3rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
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

function SigninModal({ open, close }) {
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
    console.log("로그인");
    axios
      .post("http://localhost:4000/common/signin", userInfo, {
        withCredentials: true,
      })
      .then(() => {
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
              placeholder="이메일"
              onChange={handleInputChange("email")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              onChange={handleInputChange("password")}
            />
          </div>
          <Button onClick={handleSignIn}>로그인 </Button>
        </LoginBody>
        <LoginFooter>
          <SocialLoginHeader>소셜계정으로 로그인</SocialLoginHeader>
          <SocialLogin href={KAKAO_AUTH_URL} onClick={close}>
            <img src={kakao} alt="kakaologin" width="48rem"></img>
          </SocialLogin>
          <span> </span>
          <SocialLogin href={GOOGLE_AUTHORIZE_URL} onClick={close}>
            <img src={google} alt="googlelogin" width="48rem"></img>
          </SocialLogin>
        </LoginFooter>
      </ModalBox>
    </ModalBackGround>
  ) : null;
}

export default SigninModal;
