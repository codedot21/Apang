import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../styles";
import Apang from "../images/apang.png";

export const NavContainer = styled(Container)`
  display: flex;
  position: sticky;
  align-items: center;
  }
`;

export const LogoWrap = styled(Link)`
  display: flex;
  margin-left: 3rem;
  padding-top: 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 0.5rem;
  } ;
`;

export const Logo = styled.img`
  width: 10rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 6rem;
  } ;
`;

export const NavBtn = styled.li`
  display: flex;
  position: absolute;
  align-items: center;
  text-align: center;
  list-style: none;
  right: 3rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

function Nav() {
  return (
    <>
      <NavContainer>
        <LogoWrap to="/">
          <Logo src={Apang} />
        </LogoWrap>
        <NavBtn>
          <NavLink to="/">
            <Button>Menu</Button>
          </NavLink>
          <NavLink to="/">
            <Button>Q&A</Button>
          </NavLink>
        </NavBtn>
      </NavContainer>
    </>
  );
}

export default Nav;
