import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const MainContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Main() {
  return (
    <>
      <MainContainer>Main1</MainContainer>
      <MainContainer>Main2</MainContainer>
      <MainContainer>Main3</MainContainer>
    </>
  );
}

export default Main;
