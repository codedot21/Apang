import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const ReviewContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ReviwTitle = styled.h1`
  width: 100%;
  padding: 1rem;
`;

const ReviwLine = styled.div`
  border: 1px solid black;
  width: 100%;
  padding: 1rem;
`;

const ReviwLine1 = styled.div`
  text-align: center;
`;

const Title = styled.div`
  width: 50%;
  font-weight: bold;
  float: left;
`;

const ImgPut = styled.input``;

const ImgEditingDiv = styled.div`
  width: 50%;
  float: left;
`;
const ImgEditing = styled.label`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  padding: 0.5vw;
  color: #fff;
  border-radius: 30px;
  &:hover {
    background-color: #002171;
  }
  border: 1px solid black;
`;

// const HospitalTitle = styled.div`
//   border: 1px solid black;
//   text-align: center;
// `;

function ReviewPage() {
  return (
    <ReviewContainer>
      <ReviwTitle>리뷰작성</ReviwTitle>
      <ReviwLine>
        <ReviwLine1>
          <Title>영수증 첨부</Title>
          <ImgPut type="file" id="upload_file" style={{ display: "none" }} />
          <ImgEditingDiv>
            <ImgEditing htmlFor="upload_file">첨부</ImgEditing>
          </ImgEditingDiv>
        </ReviwLine1>
        <ReviwLine1>
          <Title>병원 선택</Title>
        </ReviwLine1>
      </ReviwLine>
    </ReviewContainer>
  );
}

export default ReviewPage;
