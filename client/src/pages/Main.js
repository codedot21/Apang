import React from "react";
import styled from "styled-components";
import Hospital from "../images/hospital.jpg";
import Qna from "../images/qna.png";
import Review from "../images/review.png";
import Find from "../images/search.png";
import Doc from "../images/doc.jpg";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 65rem;
  // width: 156rem;
  width: 148rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 2rem;
  margin-left: 8rem;
  margin-right: 1rem;
`;

export const MainWrapQna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 8rem;
  margin-left: 4rem;
  margin-right: 9rem;
`;

export const ContentWrapReview = styled.div`
  text-align: center;
`;

export const ContentWrapQna = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const ContentWrapFind = styled.div`
  text-align: center;
`;

export const BoxWrapReview = styled.div`
  text-align: center;
`;

export const BoxWrapQna = styled.div`
  text-align: center;
`;

export const BoxWrapFind = styled.div`
  text-align: center;
  margin-top: 7rem;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

export const ContentTitle = styled.p`
  font-size: 2.5rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
`;

export const ContentText = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

export const Search = styled.p`
  & > input {
    padding-top: 0.7rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    width: 23rem;
    height: 3rem;
    font-size: 1.5rem;
    border: 0.1rem solid black;
  }
`;

export const Img = styled.img`
  width: 65rem;
`;

export const ImgThree = styled.img`
  width: 35rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  margin: 4rem 4.7rem 0.1rem 4rem;
  background: #6ec5ff;
  white-space: nowrap;
  padding: 0.5rem 3rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  font-size: 2rem;
  &:hover {
    background: #fff;
    background-color: #002171;
  }
`;

function Main() {
  return (
    <>
      <MainContainer>
        <MainWrap>
          <Title>어디가 아팡?</Title>
          <Text>원하는 진료과목을 선택해주세요</Text>
          <Search>
            <input type="text" placeholder="입력해주세요" />
          </Search>
        </MainWrap>
        <Img src={Hospital}></Img>
      </MainContainer>
      <MainContainer>
        <ContentWrapReview>
          <ImgThree src={Review}></ImgThree>
          <BoxWrapReview>
            <ContentTitle>솔직한 "진짜" 리뷰</ContentTitle>
            <ContentText>
              진료 내역을 인증한 실방문자만 <br />
              리뷰를 쓸 수 있어요
            </ContentText>
          </BoxWrapReview>
        </ContentWrapReview>
        <ContentWrapQna>
          <ImgThree src={Qna}></ImgThree>
          <BoxWrapQna>
            <ContentTitle>Q&A</ContentTitle>
            <ContentText>Q&A를 통한 의사와의 소통</ContentText>
          </BoxWrapQna>
        </ContentWrapQna>
        <ContentWrapFind>
          <ImgThree src={Find}></ImgThree>
          <BoxWrapFind>
            <ContentTitle>병원 찾기 기능</ContentTitle>
            <ContentText>내 근처의 병원을 쉽게 찾을 수 있어요</ContentText>
          </BoxWrapFind>
        </ContentWrapFind>
      </MainContainer>
      <MainContainer>
        <Img src={Doc}></Img>
        <MainWrapQna>
          <Title>
            전문가의 조언을
            <br />
            들을 수 있어요
          </Title>
          <Button>Q&A 가기</Button>
        </MainWrapQna>
      </MainContainer>
    </>
  );
}

export default Main;
