import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  max-width: 30rem;
  max-height: 30rem;
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
  background-color: #fbf3ed;
`;

export const SocialLogin = styled(Link)``;

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

export const BtnMenu = styled.button`
  margin: 0.7rem 1.2rem;
  background: #fbf3ed;
  white-space: nowrap;
  color: black;
  outline: none;
  border: none;
`;

function SignUpModal({ open, close }) {
  const [isSelect, setIsSelect] = useState("public");
  const [publicInfo, setPublicInfo] = useState({
    email: "",
    nickname: "",
    password: "",
  });
  const [doctorInfo, setDoctorInfo] = useState({
    email: "",
    name: "",
    password: "",
    hospital: "",
    license: "",
  });

  const handleClick = (e) => {
    setIsSelect(e.target.value);
  };

  const doctorChange = (key) => (e) => {
    setDoctorInfo({
      ...doctorInfo,
      [key]: e.target.value,
    });
  };

  const publicSignUp = () => {};

  const doctorSignUp = () => {
    axios
      .post("http://localhost:4000/doctor/signup", doctorInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("회원가입 완료");
      });
  };

  return open ? (
    <ModalBackGround onClick={close}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <LoginHeader>회원가입</LoginHeader>
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
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="text" placeholder="Nickname" />
            </div>
            <Button onClick={publicSignUp}>가입하기</Button>
          </LoginBody>
        ) : (
          <LoginBody>
            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={doctorChange("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={doctorChange("password")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Name"
                onChange={doctorChange("name")}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Lisense Number"
                onChange={doctorChange("license")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Where do you work"
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
