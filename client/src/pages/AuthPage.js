import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const AuthContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function AuthPage() {
  return (
    <>
      <AuthContainer>Auth</AuthContainer>
    </>
  );
}

export default AuthPage;
