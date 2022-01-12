import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const QnaUserContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 0 1rem 1rem;
  padding-left: 30rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const QnaBox = styled.div`
  border: 0.1rem solid #63b5f6;
  float: right;
  color: black;
  border-radius: 10px;
  max-width: 1300px;
  width: 46%;
  height: 50%;
`;

export const ContentWrap = styled.div`
  margin: 1rem 1rem 1rem 1rem;
  .content-info-last {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  float: right;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ContentText = styled.div`
  display: flex;
  height: 2.2rem;
  float: right;
  font-size: 0.8rem;
`;

function QnaUserPost() {
  return (
    <QnaUserContainer>
      <QnaBox>
        <ContentWrap>
          <ContentTitle>요즘 소화가 잘 안돼요!</ContentTitle>
          <ContentText>
            자꾸 속이 더부룩하고 소화가 잘 안되는 느낌이 들어요ㅠ
          </ContentText>
        </ContentWrap>
      </QnaBox>
    </QnaUserContainer>
  );
}

export default QnaUserPost;
