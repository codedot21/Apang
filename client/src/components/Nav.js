import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../styles";
import Apang from "../images/apang.png";
import SigninModal from "../components/modal/SigninModal.js";
import SignUpModal from "../components/modal/SignUpModal.js";
import SignUpDocModal from "../components/modal/SignUpDocModal.js";

export const NavContainer = styled(Container)`
  background: ${({ theme }) => theme.color.white};
  display: flex;
  position: fixed;
  align-items: center;
  height: 6rem;
`;

export const LogoWrap = styled(Link)`
  display: flex;
  margin-left: 25rem;
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
  right: 32rem;
  @media ${({ theme }) => theme.device.mobile} {
    right: 1rem;
    bottom: 2.1rem;
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

export const DocModal = styled.button`
  margin: 0 10px;
  background: white;
  white-space: nowrap;
  padding: 10px 20px;
  color: #3b7de0;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #63b5f6;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

function Nav() {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  const [docSignOpen, setDocSignOpen] = useState(false);

  const openDropHandler = () => {
    setIsDropOpen(!isDropOpen);
  };
  const openSigninModal = () => {
    setLoginOpen(!loginOpen);
  };

  const openSignupModal = () => {
    console.log("회원가입 되나요?");
    setSignOpen(!signOpen);
  };

  // 일반에서 의사로
  const openDocSign = () => {
    console.log("의사 회원가입 되나요?");
    setSignOpen(!signOpen);
    setDocSignOpen(!docSignOpen);
  };

  // 의사에서 일반으로
  const openPublicSign = () => {
    console.log("의사 회원가입 되나요?");
    setDocSignOpen(!docSignOpen);
    setSignOpen(!signOpen);
  };

  const openDocSignModal = () => {
    console.log("의사 회원가입 되나요?");
    setDocSignOpen(!docSignOpen);
  };

  return (
    <>
      <NavContainer>
<<<<<<< HEAD
        <LogoWrap to="/mypage/publicprofile">
=======
        <LogoWrap to="/authpage">
>>>>>>> 54a21c22a5701a15c79ea57bc4e67137506bf1c1
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
                  <SignUpModal
                    open={signOpen}
                    close={openSignupModal}
                    docClose={openDocSign}
                    docCloseA={openPublicSign}
                  />
                  <MenuBtn onClick={openDocSignModal}>의사가입</MenuBtn>
                  <SignUpDocModal
                    open={docSignOpen}
                    close={openDocSignModal}
                    docClose={openDocSign}
                  />
                  <NavLink to="/mypage/publicprofile">
                    <MenuBtn>일반마이</MenuBtn>
                  </NavLink>
                  <NavLink to="/mypage/doctorprofile">
                    <MenuBtn>의사마이</MenuBtn>
                  </NavLink>
                  <NavLink to="/authpage">
                    <MenuBtn>관리자</MenuBtn>
                  </NavLink>
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
