import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
`;

export const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 23rem;
  max-height: 30rem;
  border-radius: 1rem;
  background-color: #fbf3ed;
  overflow: hidden;
`;

export const LoginHeader = styled.div`
  position: relative;
  padding: 1.5rem 3.5rem 1rem 3.5rem;
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
  padding: 0.1rem 1rem 1rem 1rem;
  background-color: #fbf3ed;
`;

export const SocialLoginHeader = styled.div`
  background-color: #fbf3ed;
`;

export const SocialLogin = styled(Link)``;

export const Button = styled.button`
  margin: 0.7rem 2rem;
  background: #6ec5ff;
  white-space: nowrap;
  padding: 0.6rem 7rem;
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

export const BtnMenu = styled.button`
  margin: 0.7rem 1.2rem;
  background: #fbf3ed;
  white-space: nowrap;
  color: black;
  outline: none;
  border: none;
`;

function SignUpModal({ open, close }) {
  const navigate = useNavigate();
  const [isSelect, setIsSelect] = useState("public");
  const [publicInfo, setPublicInfo] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  const publicChange = (key) => (e) => {
    setPublicInfo({
      ...publicInfo,
      [key]: e.target.value,
    });
  };

  const [doctorInfo, setDoctorInfo] = useState({
    email: "",
    name: "",
    password: "",
    hospital: "",
    license: "",
  });

  const doctorChange = (key) => (e) => {
    setDoctorInfo({
      ...doctorInfo,
      [key]: e.target.value,
    });
  };

  const handleClick = (e) => {
    setIsSelect(e.target.value);
  };

  const publicSignUp = () => {
    axios
      .post("http://localhost:4000/public/signup", publicInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("회원가입 완료");
        close();
        navigate("/");
      });
  };

  const doctorSignUp = () => {
    axios
      .post("http://localhost:4000/doctor/signup", doctorInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("회원가입 완료");
        close();
        navigate("/");
      });
  };

  return open ? (
    <ModalBackGround onClick={close}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <LoginHeader>
          회원가입
          <button onClick={close}> &times; </button>
        </LoginHeader>
        <input
          type="radio"
          name="user"
          value="doctor"
          onClick={handleClick}
          defaultChecked={false}
        />
        <BtnMenu>의사</BtnMenu>
        <input
          type="radio"
          name="user"
          value="public"
          onChange={handleClick}
          defaultChecked={true}
        />
        <BtnMenu>일반</BtnMenu>
        {isSelect === "public" ? (
          <LoginBody>
            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={publicChange("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={publicChange("password")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nickname"
                onChange={publicChange("nickname")}
              />
            </div>
            <Button onClick={publicSignUp}>가입하기</Button>
          </LoginBody>
        ) : (
          <LoginBody>
            <div>
              <input
                type="email"
                placeholder="이메일"
                onChange={doctorChange("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                onChange={doctorChange("password")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="이름"
                onChange={doctorChange("name")}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="의사 라이센스 번호"
                onChange={doctorChange("license")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="어디서 근무하시나요?"
                onChange={doctorChange("hospital")}
              />
            </div>
            <Button onClick={doctorSignUp}>신청하기</Button>
          </LoginBody>
        )}
        <LoginFooter></LoginFooter>
      </ModalBox>
    </ModalBackGround>
  ) : null;
}

export default SignUpModal;
