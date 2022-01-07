import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../styles";
import Apang from "../images/apang.png";
import SigninModal from "../components/modal/SigninModal.js";
import SignUpModal from "../components/modal/SignUpModal.js";

export const NavContainer = styled(Container)`
  background: ${({ theme }) => theme.color.white};
  display: flex;
  position: sticky;
  align-items: center;
  height: 6rem;
`;

export const LogoWrap = styled(Link)`
  display: flex;
  margin-left: 1rem;
  padding-top: 0.5rem;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 0.5rem;
  } ;
`;

export const Logo = styled.img`
  width: 10rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 8rem;
  } ;
`;

export const NavBtn = styled.li`
  display: flex;
  position: absolute;
  align-items: center;
  text-align: center;
  list-style: none;
  right: 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    right: 1rem;
  } ;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const NavMenu = styled.div``;

export const DropDownListContainer = styled.div`
  background: ${({ theme }) => theme.color.button};
  display: block;
  position: absolute;
  right: 3.7rem;
  width: 6.4rem;
`;

export const DropDownList = styled.ul``;

export const MenuBtn = styled.button`
  background: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-family: Noto Sans CJK KR;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0.1em;
  white-space: nowrap;
  padding-right: 1rem;
  padding-left: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.button};
    color: black;
  }
`;

export const Btn = styled.button`
  font-family: Noto Sans CJK KR;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  background: #ffffff;
  white-space: nowrap;
  padding-right: 1rem;
  padding-left: 1rem;
  color: #3b7de0;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
`;

function Nav({ handleLogout }) {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  const [docSignOpen, setDocSignOpen] = useState(false);

  const openDropHandler = () => {
    console.log("클릭되었나요?");
    setIsDropOpen(!isDropOpen);
  };
  const openSigninModal = () => {
    console.log("로그인 모달 오픈되었나요?");
    setLoginOpen(!loginOpen);
  };

  const openSignupModal = () => {
    console.log("일반회원가입 모달 오픈되었나요?");
    setSignOpen(!signOpen);
  };

  // 일반에서 의사로
  const openDocSign = () => {
    console.log("의사 회원가입으로 전환되나요?");
    setSignOpen(!signOpen);
    setDocSignOpen(!docSignOpen);
  };

  // 의사에서 일반으로
  const openPublicSign = () => {
    console.log("일반 회원가입으로 전환되나요?");
    setDocSignOpen(!docSignOpen);
    setSignOpen(!signOpen);
  };

  const openDocSignModal = () => {
    console.log("의사 회원 모달 오픈되었나요?");
    setDocSignOpen(!docSignOpen);
  };

  return (
    <>
      <NavContainer>
        <LogoWrap to="/">
          <Logo src={Apang} />
        </LogoWrap>
        <NavBtn>
          <NavMenu>
            <Btn onClick={openDropHandler}>메뉴</Btn>
            {isDropOpen ? (
              <DropDownListContainer>
                <DropDownList>
                  <MenuBtn onClick={openSigninModal}>로그인</MenuBtn>
                  <SigninModal open={loginOpen} close={openSigninModal} />

                  <MenuBtn onClick={openSignupModal}>회원가입</MenuBtn>
                  <SignUpModal open={signOpen} close={openSignupModal} />

                  <NavLink to="/mypage/publicprofile">
                    <MenuBtn>일반마이</MenuBtn>
                  </NavLink>
                  <NavLink to="/mypage/doctorprofile">
                    <MenuBtn>의사마이</MenuBtn>
                  </NavLink>
                  <NavLink to="/authpage">
                    <MenuBtn>관리자</MenuBtn>
                  </NavLink>
                  <MenuBtn onClick={handleLogout}>로그아웃</MenuBtn>
                </DropDownList>
              </DropDownListContainer>
            ) : null}
          </NavMenu>

          <NavLink to="/">
            <Button>Q&A</Button>
          </NavLink>
        </NavBtn>
      </NavContainer>
    </>
  );
}

export default Nav;
