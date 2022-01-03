import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const UserContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function UserMypage() {
  return (
    <>
      <UserContainer>User</UserContainer>
    </>
  );
}

export default UserMypage;
