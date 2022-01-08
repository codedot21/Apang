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

const Profile = styled.input`
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
  const [userInfo, setUserInfo] = useState({
    name: "",
    hospital: "",
    password: "",
    newPassword: "",
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

  // 수정
  // const [isSucces, setSuccess] = useState(null);
  const submit = () => {
    // console.log("저장");
    const formdata = new FormData();
    formdata.append("apang", imgInfo.file);
    formdata.append("name", userInfo.name);
    formdata.append("hospital", userInfo.hospital);
    // formdata.append("hospital", userInfo.hospital);
    axios.post("http://localhost:4000/doctor/profile", formdata, {
      headers: { "Content-type": "multipart/form-data" },
      withCredentials: true,
    });
  };

  // 비밀번호 변경
  const passwordChange = () => {
    delete userInfo.name;
    delete userInfo.hospital;
    // console.log(userInfo);
    axios.post("http://localhost:4000/doctor/profile", userInfo, {
      withCredentials: true,
    });
  };

  // 회원탈퇴
  const deleteHandler = () => {
    axios
      .delete("http://localhost:4000/common/users", {
        withCredentials: true,
      })
      .then((res) => {
        // 서버에서 넘겨준 auth 잘 불러오는지 확인.
        // console.log(res.data.auth);
        // 로그아웃 상태로 메인페이지로 보내줘야됨
      });
  };

  return (
    <>
      <DocContainer>
        {/* 회원정보 시작 */}
        <Title>회원정보</Title>
        <UserContainerLine>
          <Profilecontainer>
            <Profile
              type="file"
              id="upload_file"
              style={{
                display: "none",
              }}
              onChange={handleImgChange}
            />
            <Box onChange={handleImgChange}>
              {imgInfo.filepreview !== null ? (
                <img
                  src={imgInfo.filepreview}
                  alt="uploadimage"
                  style={{
                    width: "100px",
                    height: "90px",
                    objectFit: "scale-down",
                  }}
                />
              ) : null}
            </Box>
            <ProfileEditing htmlFor="upload_file">편집</ProfileEditing>
            {/* <input
              type="file"
              id="upload_file"
              onChange={handleImgChange}
            ></input> */}
          </Profilecontainer>
          <Usercontainer>
            <UserEmailTitle>이메일</UserEmailTitle>
            <UserEmail type="text" name="val" disabled />
            <UserEmailTitle>이름</UserEmailTitle>
            <UserEmail
              type="text"
              placeholder="이름"
              onChange={handleInputChange("name")}
            />
            <UserEmailTitle>병원명</UserEmailTitle>
            <UserEmail
              type="text"
              placeholder="병원명"
              onChange={handleInputChange("hospital")}
            />
          </Usercontainer>
        </UserContainerLine>
        <Edting onClick={submit}>저장하기</Edting>

        {/* 회원정보 끝 */}
        <br />

        <PasswordLine>
          <PassWordTitle>기존비밀번호</PassWordTitle>
          <PassWordInput
            placeholder="기존"
            type="password"
            onChange={handleInputChange("password")}
          ></PassWordInput>
          <PassWordTitle>새로운 비밀번호</PassWordTitle>
          <PassWordInput
            placeholder="New"
            type="password"
            onChange={handleInputChange("newPassword")}
          ></PassWordInput>
          <PassWordTitle>비밀번호 확인</PassWordTitle>
          <PassWordInput
            placeholder="New 한번 더"
            type="password"
          ></PassWordInput>
        </PasswordLine>
        <Box>
          <EditPasswordDeleted onClick={passwordChange}>
            비밀번호 변경
          </EditPasswordDeleted>
          <EditPasswordDeleted onClick={deleteHandler}>
            회원탈퇴
          </EditPasswordDeleted>
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
