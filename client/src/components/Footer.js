import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const FooterContainer = styled(Container)`
  // background-color: #dee2e6;
  background-color: ${({ theme }) => theme.color.footer};
  display: flex;
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
