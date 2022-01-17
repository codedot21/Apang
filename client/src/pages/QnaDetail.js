import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import question from "../images/question.png";
import QnaUserPost from "../components/QnaUserPost.js";
import Qna from "../components/Qna.js";
import QnaPost from "../components/QnaPost.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const QnaContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 2rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 23rem;
  @media ${({ theme }) => theme.device.ipad} {
    width: 70rem;
    max-width: 40rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 60rem;
    max-width: 20rem;
  }
`;
export const ImgWrap = styled.div`
  display: block;
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

function QnaDetail({ isLogin, auth, userInfo }) {
  return (
    <>
      <QnaContainer>
        <ImgWrap>
          <Img src={question}></Img>
        </ImgWrap>
      </QnaContainer>
      <QnaUserPost />
      <QnaPost isLogin={isLogin} userInfo={userInfo} auth={auth} />
    </>
  );
}

export default QnaDetail;
