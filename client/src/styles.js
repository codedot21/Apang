import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 

`;

export const theme = {
  color: {
    main: "#095cd8",
    button: "#63b5f6",
    modal: "#fbf3ed",
    footer: "#b5afaf",
    hamburger: "#7f8c8d",
    white: "#ffffff",
  },

  device: {
    mobile: `screen and (max-width: 767px)`,
  },
};

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  // max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const Button = styled.button`
  font-family: Noto Sans CJK KR;
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
  &:hover {
    background-color: #63b5f6;
  }
`;

export default GlobalStyle;
