import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import { Link } from "react-router-dom";
import Qna from "../components/Qna";
import Doc from "../images/doc.png";
import QnaModal from "../components/modal/QnaModal.js";

export const QnaContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QnaListContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryWrap = styled.div`
  @media ${({ theme }) => theme.device.ipad} {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const QnaTextContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QnaWrap = styled.div`
  // display: block;
  // margin-left: 0;
  // margin-right: 0;
  width: 100%;
  @media ${({ theme }) => theme.device.ipad} {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const Img = styled.img`
  width: 36rem;
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

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.main};

  @media ${({ theme }) => theme.device.ipad} {
    font-size: 2.9rem;
    text-align: center;
    margin-bottom: 1.3rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.5rem;
    text-align: center;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.main};

  @media ${({ theme }) => theme.device.ipad} {
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.3rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    text-align: center;
    margin-left: 2.8rem;
    margin-bottom: 1.3rem;
  }
`;

export const QnaTextWrap = styled.div`
  @media ${({ theme }) => theme.device.ipad} {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Category = styled.button`
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  border-radius: 10px;
  border: none;
  width: 7.9rem;
  height: 2rem;
  margin: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.button};
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  width: 5rem;
  height: 2rem;
  margin: 1rem;
  margin-left: 72rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
  @media ${({ theme }) => theme.device.ipad} {
    width: 4rem;
    margin-left: 40rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 4rem;
    margin-left: 15rem;
  }
`;

function QnaPage() {
  const [QuestionOpen, setQuestionOpen] = useState(false);

  const openQuestionModal = () => {
    console.log("질문하기 모달 오픈되었나요?");
    setQuestionOpen(!QuestionOpen);
  };

  return (
    <>
      <QnaContainer>
        <ImgWrap>
          <Img src={Doc}></Img>
        </ImgWrap>
        <CategoryWrap>
          <Category>치과</Category>
          <Category>피부과</Category>
          <Category>성형외과</Category>
          <Category>안과</Category>
          <Category>산부인과</Category>
          <Category>정신건강의학과</Category>
          <Category>비뇨기과</Category>
          <Category>정형외과</Category>
          <Category>마취통증의학과</Category>
          <Category>신경외과</Category>
          <Category>재활의학과</Category>
          <Category>영상의학과</Category>
          <Category>외과</Category>
          <Category>신경과</Category>
          <Category>소아과</Category>
          <Category>내과</Category>
          <Category>이비인후과</Category>
          <Category>가정의학과</Category>
          <Category>한의원</Category>
          <Category>코로나19 예방접종</Category>
        </CategoryWrap>
      </QnaContainer>

      <QnaTextContainer>
        <QnaTextWrap>
          <Title>궁금한 사항을 물어봐주세요</Title>
          <Text>담당 선생님들이 답변을 주실거에요</Text>
        </QnaTextWrap>
      </QnaTextContainer>

      <QnaListContainer>
        <QnaWrap>
          <Button onClick={openQuestionModal}>질문하기</Button>
          <QnaModal open={QuestionOpen} close={openQuestionModal} />
          <Qna />
          <Qna />
        </QnaWrap>
      </QnaListContainer>
    </>
  );
}

export default QnaPage;
