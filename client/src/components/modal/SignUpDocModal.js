import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  // padding-top: 0.5rem;
  // padding-bottom: 0.5rem;
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

function SignUpdocModals({ open, close }) {
  return open ? (
    <ModalBackGround>
      <ModalBox>
        <LoginHeader onClick={close}>회원가입</LoginHeader>
        <input type="radio" name="user" />
        <BtnMenu>의사</BtnMenu>
        <input type="radio" name="user" onClick={close} />
        <BtnMenu>일반</BtnMenu>
        <LoginBody>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="number" placeholder="Lisense Number" />
          </div>
          <div>
            <input type="text" placeholder="Where do you work" />
          </div>
          <Button onClick={close}>가입하기</Button>
        </LoginBody>
        <LoginFooter></LoginFooter>
      </ModalBox>
    </ModalBackGround>
  ) : null;
}

export default SignUpdocModals;
