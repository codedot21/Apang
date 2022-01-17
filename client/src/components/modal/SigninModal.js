import React, { useState } from "react";
import styled from "styled-components";
import kakao from "../../images/kakao.png";
import google from "../../images/google.png";
import { KAKAO_AUTH_URL } from "../OAuthKakao";
import { GOOGLE_AUTHORIZE_URL } from "../OAuthGoogle";
import axios from "axios";
import Swal from "sweetalert2";
import { message } from "../../modules/message";

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
  z-index: 99;
`;

export const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 23rem;
  max-height: 25rem;
  border-radius: 1rem;
  background-color: #fbf3ed;
  overflow: hidden;
`;

export const LoginHeader = styled.div`
  position: relative;
  padding: 1.5rem 3.5rem 1rem 9.3rem;
  background-color: #fbf3ed;
  font-weight: 500;
  color: black;
  font-size: 1.5rem;

  & > button {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    width: 1.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.color.hamburger};
    border: 0;
    cursor: pointer;
    background-color: #fbf3ed;
  }
`;

export const LoginBody = styled.div`
  padding: 1rem;
  color: black;
  background-color: #fbf3ed;

  & > div {
    padding: 0rem 0.7rem 0.7rem 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > input {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    width: 17rem;
    height: 2.5rem;
    font-size: 0.8rem;
    border: 0.1rem solid #dee2e6;
    border-radius: 10px;
    &:focus {
      outline: 0.1rem solid #63b5f6;
    }
  }
`;

export const LoginFooter = styled.div`
  padding: 0.1rem 1rem 1rem 6.8rem;
  background-color: #fbf3ed;
`;

export const SocialLoginHeader = styled.div`
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-left: 1.2rem; //추가된것
  padding-bottom: 1rem;
  background-color: #fbf3ed;
`;

// export const SocialLogin = styled(Link)``;
export const SocialLogin = styled.a`
  padding: 0.1rem 1rem 1rem 0.8rem;
`;

export const Button = styled.button`
  margin: 0rem 2rem;
  background: #6ec5ff;
  white-space: nowrap;
  padding: 0.6rem 7.3rem;
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

export const Msg = styled.div`
  color: red;
  font-size: 13px;
`;

function SigninModal({ open, close, handleResponseSuccess }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const reset = () => {
    setUserInfo({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (key) => (e) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value,
    });
  };

  const handleSignIn = () => {
    const { email, password } = userInfo;
    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
        text: message.emptyMessage,
      });
      return;
    } else if (password === "") {
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
        text: message.emptyMessage,
      });
      return;
    } else {
      axios
        .post("http://localhost:80/common/signin", userInfo, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log("auth번호!", res.data.data.auth);
          if (res.data.error === 1) {
            Swal.fire({
              icon: "warning",
              title: "Apang 로그인",
              text: message.loginFail,
            });
          } else if (res.data.error === 2) {
            Swal.fire({
              icon: "error",
              title: "Apang 로그인",
              text: message.doctorFail,
            });
          } else {
            handleResponseSuccess(res.data.data.auth);
            // console.log("로그인 완료");
            // console.log(res.status);
            Swal.fire({
              icon: "success",
              title: "Apang 로그인",
              text: message.loginSuccess,
            });
            close();
          }
        });
    }
  };
  return open ? (
    <ModalBackGround
      onClick={() => {
        reset();
        close();
      }}
    >
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <LoginHeader>
          로그인
          <button onClick={close}> &times; </button>
        </LoginHeader>
        <LoginBody>
          <div>
            <input
              id="loginEmail"
              type="email"
              placeholder="이메일"
              onChange={handleInputChange("email")}
              value={userInfo.email}
            />
          </div>
          <Msg>{errorMessage.loginEmail}</Msg>
          <div>
            <input
              id="loginPassword"
              type="password"
              placeholder="비밀번호"
              onChange={handleInputChange("password")}
              value={userInfo.password}
            />
          </div>
          <Msg>{errorMessage}</Msg>
          <Button onClick={handleSignIn}>로그인</Button>
        </LoginBody>
        <LoginFooter>
          <SocialLoginHeader>소셜계정으로 로그인</SocialLoginHeader>
          <SocialLogin href={KAKAO_AUTH_URL} onClick={close}>
            <img src={kakao} alt="kakaologin" width="48rem"></img>
          </SocialLogin>
          <SocialLogin href={GOOGLE_AUTHORIZE_URL} onClick={close}>
            <img src={google} alt="googlelogin" width="48rem"></img>
          </SocialLogin>
        </LoginFooter>
      </ModalBox>
    </ModalBackGround>
  ) : null;
}

export default SigninModal;
