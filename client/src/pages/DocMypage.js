import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import axios from "axios";

export const DocContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 회원정보 시작

const Title = styled.h1`
  width: 100%;
  padding: 1rem;
`;

const UserContainerLine = styled.div`
  border: 1px solid #b5afaf;
  padding: 2rem;
  height: 220px;
  width: 80%;
  margin: 0 auto;
`;

const Profilecontainer = styled.div`
  float: left;
  width: 40%;
  text-align: center;
`;

const Profile = styled.div`
  width: 50%;
  height: 100px;
  border: 1px solid #b5afaf;
  padding: 40px;
  margin: 0 auto;
`;

const ProfileEditing = styled.label`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  padding: 0.5vw;
  color: #fff;
  border-radius: 30px;
  &:hover {
    background-color: #002171;
  }
  position: relative;
  top: 2vw;
`;

const Usercontainer = styled.div`
  width: 60%;
  float: right;
  height: 13vw;
`;

const UserEmailTitle = styled.div`
  float: left;
  padding: 1rem;
  font-weight: bold;
  width: 30%;
  height: 23%;
`;

const UserEmail = styled.input`
  float: left;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 30px;
  width: 50%;
  margin-bottom: 10px;
`;

const HospitalBtn = styled.button`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  color: #fff;
  padding: 5px;
  border-radius: 30px;
  position: relative;
  top: 60px;
  right: 35px;
  &:hover {
    background-color: #002171;
  }
`;

const NickNameEdit = styled.button`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  border-radius: 30px;
  color: #fff;
  padding: 5px;
  margin-left: 20px;
  &:hover {
    background-color: #002171;
  }
`;

const Edting = styled.button`
  width: 20%;
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  margin: 20px;
  &:hover {
    background-color: #002171;
  }
  position: relative;
  left: 35vw;
`;

// 회원정보 끝

// 비밀번호 시작

const PasswordLine = styled.div`
  border: 1px solid #b5afaf;
  padding: 1rem;
  height: 220px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

const PassWordTitle = styled.span`
  width: 50%;
  padding: 20px;
  float: left;
  font-weight: bold;
`;

const PassWordInput = styled.input`
  width: 30%;
  height: 10px;
  margin: 10px;
  float: left;
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
`;

const Box = styled.div`
  text-align: center;
`;

const EditPasswordDeleted = styled.button`
  width: 20%;
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  margin: 20px;
  &:hover {
    background-color: #002171;
  }
`;

// 비밀번호 끝

// 대답 시작

const MyreviewTitle = styled.h2`
  color: #095cd8;
  margin: 20px 10px 20px 0px;
`;

// 대답 끝

function DocMypage() {
  const [imgInfo, setImgInfo] = useState({
    file: [],
    filepreview: null,
  });
  const handleInputChange = (e) => {
    setImgInfo({
      ...imgInfo,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  // 수정
  // const [isSucces, setSuccess] = useState(null);
  const submit = async () => {
    console.log("저장");
    const formdata = new FormData();
    formdata.append("apang", imgInfo.file);
    console.log(formdata);
    axios.post("http://localhost:80/public/profile", formdata, {
      headers: { "Content-type": "multipart/form-data" },
    });
    // .then((res) => {
    //   console.warn(res);
    //   if (res.data.success === 1) {
    //     setSuccess("이미지가 성공적으로 업데이트 되었습니다");
    //   }
    // });
  };
  return (
    <>
      <DocContainer>
        {/* 회원정보 시작 */}
        <Title>회원정보</Title>
        <UserContainerLine>
          {/* <Profile
          type="file"
          type="file"
          id="upload_file"
          style={{ display: "none" }}
          onChange={handleInputChange}
        /> */}
          <Profilecontainer>
            <Profile>
              {imgInfo.filepreview !== null ? (
                <img src={imgInfo.filepreview} alt="uploadimage" />
              ) : null}
            </Profile>
            <ProfileEditing htmlFor="upload_file">편집</ProfileEditing>
          </Profilecontainer>
          <Usercontainer>
            <UserEmailTitle>이메일</UserEmailTitle>
            <UserEmail type="text" name="val" disabled />
            <UserEmailTitle>닉네임</UserEmailTitle>
            <UserEmail type="text" placeholder="닉네임" />
            {/* <NickNameEdit>수정</NickNameEdit> */}

            <UserEmailTitle>병원명</UserEmailTitle>
            <UserEmail type="text" placeholder="병원명" />
            {/* <HospitalBtn>수정</HospitalBtn> */}
          </Usercontainer>
        </UserContainerLine>
        <Edting>저장하기</Edting>

        {/* 회원정보 끝 */}
        <br />

        <PasswordLine>
          <PassWordTitle>기존비밀번호</PassWordTitle>
          <PassWordInput placeholder="기존" type="password"></PassWordInput>
          <PassWordTitle>새로운 비밀번호</PassWordTitle>
          <PassWordInput placeholder="New" type="password"></PassWordInput>
          <PassWordTitle>비밀번호 확인</PassWordTitle>
          <PassWordInput
            placeholder="New 한번 더"
            type="password"
          ></PassWordInput>
        </PasswordLine>
        <Box>
          <EditPasswordDeleted>비밀번호 변경</EditPasswordDeleted>
          <EditPasswordDeleted>회원탈퇴</EditPasswordDeleted>
        </Box>
        {/* 비밀번호 끝 */}

        <hr />
        {/* MY Review 시작*/}
        <MyreviewTitle>MY Answer</MyreviewTitle>

        {/* MY Review 끝*/}
      </DocContainer>
    </>
  );
}

export default DocMypage;
