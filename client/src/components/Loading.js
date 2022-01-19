import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import LoadingGif from "../images/loading.gif";
import LoadingBarGif from "../images/loadingBar.gif";

export const LoadingContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 0rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .loading-indicator {
    width: 40rem;
    @media ${({ theme }) => theme.device.ipad} {
      width: 35rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 20rem;
    }
  }
`;

export const LoadingBarContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  margin-bottom: 3rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .loading {
    width: 20rem;
    padding: 0rem 2rem;
    @media ${({ theme }) => theme.device.ipad} {
      width: 15rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 12rem;
    }
  }
`;

function Loading() {
  return (
    <>
      <LoadingContainer>
        <img
          className="loading-indicator"
          alt="now loading..."
          src={LoadingGif}
        />
      </LoadingContainer>
      <LoadingBarContainer>
        <img className="loading" alt="loading..." src={LoadingBarGif} />
      </LoadingBarContainer>
    </>
  );
}

export default Loading;
