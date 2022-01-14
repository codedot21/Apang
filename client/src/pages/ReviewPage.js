import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const ReviewContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const ReviewTitle = styled.h1`
  width: 100%;
  padding: 1rem;
`;

const ReviewLine = styled.div`
  border: 1px solid black;
  width: 80%;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 2vw;
`;

const ReviewLine1 = styled.div`
  margin: 30px;
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: bold;
  float: left;
  width: 40%;
  text-align: center;
  margin: 1vw;
  padding: 0.5rem;
  @media ${({ theme }) => theme.device.mobile} {
    text-align: left;
    width: 100%;
  }
`;

const ImgDiv = styled.div`
  margin: 20px;
`;

const ImgPut = styled.input``;
const ImgEditing = styled.label`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  padding: 0.2vw;
  color: #fff;
  margin: 10px;
  &:hover {
    background-color: #002171;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 5rem;
    font-size: 13px;
  }
`;

const ReviwLine2 = styled.div`
  text-align: center;
`;

const Selector = styled.select`
  padding: 1rem;
  box-sizing: border-box;
  width: 30%;
  margin: 1vw;
  border-radius: 20px;
  border: 1px solid black;
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

const Input = styled.input`
  padding: 1rem;
  box-sizing: border-box;
  width: 30%;
  margin: 1vw;
  border-radius: 20px;
  border: 1px solid black;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 61%;
  height: 7em;
  resize: none;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Edting = styled.button`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  &:hover {
    background-color: #002171;
  }
  display: block;
  margin: auto;
  width: 7vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    width: 40%;
  }
`;

const HospitalMapTitle = styled.h2`
  padding: 1vw;
  margin: 1vw;
`;

const Box = styled.div`
  text-align: center;
`;

function ReviewPage(props) {
  console.log(props.userInfo);

  const [userInfo, setUserInfo] = useState({
    nickname: "",
  });

  const [imgInfo, setImgInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleImgChange = (e) => {
    setImgInfo({
      ...imgInfo,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleInputChange = (key) => (e) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value,
    });
  };

  return (
    <ReviewContainer>
      <ReviewTitle>리뷰작성</ReviewTitle>
      <ReviewLine>
        {/* <Selector>
          <Options disabled selected>
            병원선택
          </Options>
          <Options value="hospital">치과</Options>
          <Options value="hospital">내과</Options>
        </Selector> */}

        <HospitalMapTitle>지도</HospitalMapTitle>

        <ReviewLine1>
          <ImgPut
            type="file"
            id="upload_file"
            style={{ display: "none" }}
            onChange={handleImgChange}
          />
          <Box onChange={handleImgChange}>
            {imgInfo.filepreview !== null ? (
              <img
                src={imgInfo.filepreview}
                alt="uploadimage"
                style={{
                  width: "13vw",
                  height: "13vw",
                  objectFit: "scale-down",
                }}
              />
            ) : (
              <img
                style={{
                  width: "13vw",
                  height: "13vw",
                  objectFit: "scale-down",
                }}
                // src={require(`././uploads/${props.userInfo.profile_img}`)}
                //사진이름을 한글로 하면 에러뜬다....!
                // src={require(`../../public/uploads/${props.userInfo.profile_img}`)}
                // src={`../../public/uploads/${props.userInfo.profile_img}`}
                alt="publicimage"
              />
            )}
          </Box>
          <ImgDiv>
            <ImgEditing htmlFor="upload_file">영수증 첨부</ImgEditing>
          </ImgDiv>
          <hr></hr>
        </ReviewLine1>
        <Title>병원</Title>
        <Selector>
          {/* 맵함수 사용하여 반복 */}
          <Options disabled selected>
            병원선택
          </Options>
          <Options value="hospital">너네병원</Options>
          <Options value="hospital">그쪽병원</Options>
          <Options value="hospital">저쪽병원</Options>
          <Options value="hospital">와따병원</Options>
          <Options value="hospital">여기다병원</Options>
        </Selector>
        <Title>닉네임</Title>
        <Input
          type="text"
          defaultValue={props.userInfo.nickname}
          onChange={handleInputChange("nickname")}
          disabled
        ></Input>
        <Title>제목</Title>
        <Input type="text" placeholder="제목을 입력해 주세요."></Input>
        <div style={{ clear: "both" }}></div>
        <Title style={{ border: "none" }}>내용</Title>
        <ReviwLine2>
          <Textarea placeholder="내용을 입력해 주세요." type="text"></Textarea>
        </ReviwLine2>
        <Edting>리뷰작성</Edting>
      </ReviewLine>
    </ReviewContainer>
  );
}

export default ReviewPage;
