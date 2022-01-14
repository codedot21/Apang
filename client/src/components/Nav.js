import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styles";
import Apang from "../images/apang.png";
import SigninModal from "../components/modal/SigninModal.js";
import SignUpModal from "../components/modal/SignUpModal.js";
import hamburger from "../images/hamburger.png";

export const NavContainer = styled(Container)`
  background: ${({ theme }) => theme.color.white};
  display: flex;
  position: sticky;
  align-items: center;
  height: 6rem;
  top: 0;
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

export const NavMenu = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  text-align: center;
  list-style: none;
  right: 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    right: 1rem;
  }

  #main-menu > li {
    float: left;
    position: relative;
    list-style: none;
  }

  #sub-menu {
    position: absolute;
    margin-top: 1rem;
    margin-left: 0rem;
    right: 0.1rem;
    background: white;
    opacity: 0;
    visibility: hidden;
    transition: all 0.7s ease-in;
    list-style: none;
    border: 1px solid #8ac8ff;
    border-radius: 0.1rem;
  }

  #sub-menu > li {
    border-bottom: 1px solid #00000026;
  }

  #main-menu > li:hover #sub-menu {
    opacity: 1;
    visibility: visible;
  }
`;

export const Hamburger = styled.button`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    color: ${({ theme }) => theme.color.hamburger};
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    position: absolute;
    right: 1rem;
    justify-content: center;
    align-items: center;
    border: none;
  } ;
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
  color: ${({ theme }) => theme.color.main};
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 99;
  :hover {
    background-color: #8ac8ff;
    color: white;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  } ;
`;

export const DropDownButton = styled.button`
  background: white;
  border: none;
  padding: 0.5rem;
  list-style: none;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  width: 10rem;
  color: ${({ theme }) => theme.color.main};
  :hover {
    background-color: #8ac8ff;
    color: white;
  }

  @media ${({ theme }) => theme.device.mobile} {
    :hover {
      background-color: ${({ theme }) => theme.color.button};
    }
  } ;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
function Nav({ isLogin, handleResponseSuccess, handleLogout, auth }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);

  const openSigninModal = () => {
    console.log("로그인 모달 오픈되었나요?");
    setLoginOpen(!loginOpen);
  };

  const openSignupModal = () => {
    console.log("일반회원가입 모달 오픈되었나요?");
    setSignOpen(!signOpen);
  };

  return (
    <NavContainer>
      <LogoWrap to="/">
        <Logo src={Apang} />
      </LogoWrap>
      {isLogin ? (
        <NavMenu>
          <ul id="main-menu">
            <li>
              <Btn>Menu</Btn>
              <ul id="sub-menu">
                {auth === 1 ? ( //
                  <li>
                    <NavLink to="/mypage/doctorprofile">
                      <DropDownButton>마이페이지</DropDownButton>
                    </NavLink>
                  </li>
                ) : auth === 0 ? (
                  <li>
                    <NavLink to="/authpage">
                      <DropDownButton>관리자</DropDownButton>
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/mypage/publicprofile">
                      <DropDownButton>마이페이지</DropDownButton>
                    </NavLink>
                  </li>
                )}

                <li>
                  <DropDownButton onClick={handleLogout}>
                    로그아웃
                  </DropDownButton>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/qna">
                <Btn>Q&A</Btn>
              </NavLink>
            </li>
          </ul>
        </NavMenu>
      ) : (
        <NavMenu>
          <ul id="main-menu">
            <li>
              <Btn>Menu</Btn>
              <ul id="sub-menu">
                <li>
                  <DropDownButton onClick={openSigninModal}>
                    로그인
                  </DropDownButton>
                  <SigninModal
                    handleResponseSuccess={handleResponseSuccess}
                    open={loginOpen}
                    close={openSigninModal}
                  />
                </li>
                <li>
                  <DropDownButton onClick={openSignupModal}>
                    회원가입
                  </DropDownButton>
                  <SignUpModal
                    open={signOpen}
                    close={openSignupModal}
                    handleResponseSuccess={handleResponseSuccess}
                  />
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/qna">
                <Btn>Q&A</Btn>
              </NavLink>
            </li>
          </ul>
        </NavMenu>
      )}
      <Hamburger>
        <img src={hamburger} alt="user" width="28rem"></img>
      </Hamburger>
    </NavContainer>
  );
}

export default Nav;
