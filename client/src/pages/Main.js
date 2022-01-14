import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import Hospital from "../images/hospital.png";
import Qna from "../images/qna.png";
import Review from "../images/review.png";
import Find from "../images/searchdoc.png";
import Doc from "../images/doc.jpg";
import SearchIcon from "../images/search.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MainContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  height: 55rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.ipad} {
    display: block;
    text-align: center;
    margin-top: 20%;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    text-align: center;
    margin-top: 50%;
    height: 100%;
  }
`;

export const MainWrap = styled.div`
  @media ${({ theme }) => theme.device.ipad} {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ImgWrap = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 4.3rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.device.ipad} {
    font-size: 2.9rem;
    text-align: center;
    margin-bottom: 1.3rem;
    margin-left: 2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.5rem;
    text-align: center;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-right: 2rem;

  @media ${({ theme }) => theme.device.ipad} {
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.3rem;
    margin-left: 5rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    text-align: center;
    margin-left: 2.8rem;
    margin-bottom: 1.3rem;
  }
`;

export const Img = styled.img`
  width: 56rem;
  @media ${({ theme }) => theme.device.ipad} {
    width: 70rem;
    max-width: 40rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 60rem;
    max-width: 20rem;
  }
`;

export const Search = styled.div`
  & form {
    position: relative;
    text-align: center;
    width: 20rem;
    margin: 0 auto;
    margin-top: 3rem;
    margin-left: 0;
    & input {
      outline: none;
      border: none;
      width: 24rem;
      height: 3.5rem;
      font-size: 1.5rem;
      padding-left: 0.5rem;
      border: 0.2rem solid #63b5f6;
      border-radius: 10px;
    }
    & button {
      position: absolute;
      width: 1%;
      height: 100%;
      border: none;
      background-color: transparent;
      top: 0;
      right: 0;
    }
    & img {
      width: 2.8rem;
    }
  }
  @media ${({ theme }) => theme.device.ipad} {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const MainWrapQna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ContentWrapReview = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;

export const ContentWrapQna = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;

export const ContentWrapFind = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;

export const BoxWrapReview = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;

export const BoxWrapQna = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;

export const BoxWrapFind = styled.div`
  text-align: center;
  // margin-top: 1em;
  // margin-bottom: 0.1rem;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;

export const ContentTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const ContentText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 1.3rem;
  }
`;

export const ImgThree = styled.img`
  width: 26rem;
  margin-bottom: 2rem;
  // border: 1px solid #63b5f6;
  @media ${({ theme }) => theme.device.mobile} {
    width: 15rem;
    max-width: 20rem;
    align-items: center;
  }
`;

export const Button = styled(Link)`
  margin: 4rem 4.7rem 0.1rem 4rem;
  background: #6ec5ff;
  white-space: nowrap;
  padding: 0.5rem 3rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    background: #fff;
    background-color: #002171;
  }
  @media ${({ theme }) => theme.device.ipad} {
    font-size: 1.5rem;
    width: 10rem;
    max-width: 20rem;
    margin-left: 6.5rem;
    margin-top: 1rem;
    margin-bottom: 1.3rem;
    padding: 0.3rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    // font-size: 1rem;
    // width: 10rem;
    // max-width: 20rem;
    // margin-left: 6.5rem;
    // margin-top: 1rem;
    // padding: 0.3rem;
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const SubTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 600;
  margin-top: 8rem;

  @media ${({ theme }) => theme.device.ipad} {
    // font-size: 2.9rem;
    // text-align: center;
    // margin-bottom: 1.3rem;
    // margin-left: 2rem;
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    // font-size: 1.5rem;
    // text-align: center;
    // margin-left: 1.5rem
    // margin-bottom: 1rem;
    display: none;
  }
`;

const Selector = styled.select`
  outline: none;
  border: none;
  width: 24rem;
  height: 3.5rem;
  font-size: 1rem;
  color: #707070;
  padding-left: 0.5rem;
  border: 0.2rem solid #63b5f6;
  border-radius: 10px;
  background-color: white;
  -webkit-appearance: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Options = styled.option`
  padding: 2rem;
  box-sizing: border-box;
  margin: 1vw;
  border-radius: 30px;
  border: 1px solid red;
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
  }
`;

const SerchButton = styled.button`
  cursor: pointer;
`;

// map을 위한 테스트
function Main() {
  const navigate = useNavigate();
  const serch = [
    { key: 1, value: "치과" },
    { key: 2, value: "산부인과" },
    { key: 3, value: "내과" },
    { key: 4, value: "정형외과" },
    { key: 5, value: "성형외과" },
  ];
  const [select, setSelect] = useState();

  const hadleInputvalue = (e) => {
    setSelect(e.target.value);
  };
  // console.log(select);

  return (
    <>
      <MainContainer>
        <MainWrap>
          <Title>어디가 아팡?</Title>
          <Text>원하는 진료과목을 선택해주세요</Text>
          <Search>
            <form>
              <Selector value={select} onChange={hadleInputvalue}>
                <Options disabled selected>
                  진료과목선택
                </Options>
                {serch.map((el, index) => {
                  return (
                    <Options value={el.value} key={el.key}>
                      {el.value}
                    </Options>
                  );
                })}
              </Selector>
              <SerchButton onClick={() => navigate("/medicallist")}>
                <img src={SearchIcon} alt="SearchIcon" />
              </SerchButton>
            </form>
          </Search>
        </MainWrap>
        <ImgWrap>
          <Img src={Hospital}></Img>
        </ImgWrap>
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
          <SubTitle>
            전문가의 조언을
            <br />
            들을 수 있어요
          </SubTitle>
          <Button to="/qna">Q&A 가기</Button>
        </MainWrapQna>
      </MainContainer>
    </>
  );
}

export default Main;
