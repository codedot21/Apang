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
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
`;

const DocContainerLine = styled.div`
  border: 1px solid #b5afaf;
  padding: 2rem;
  height: 220px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 100%;
    height: 22rem;
  }
`;

const Profilecontainer = styled.div`
  float: left;
  width: 40%;
  text-align: center;
  height: 80%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    max-width: 100%;
    height: 50%;
  }
`;

const Profile = styled.input``;

const ProfileEditing = styled.label`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  padding: 0.5vw;
  color: #fff;
  border-radius: 30px;
  &:hover {
    background-color: #002171;
  }
  display: block;
  width: 6vw;
  margin: auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
    max-width: 8rem;
    font-size: 13px;
  }
`;

const DocLine = styled.div`
  width: 60%;
  float: right;
  height: 13vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 13px;
    float: left;
    width: 100%;
  }
`;

const DocTitle = styled.div`
  float: left;
  padding: 1rem;
  font-weight: bold;
  width: 30%;
  height: 23%;
  @media ${({ theme }) => theme.device.mobile} {
    float: center;
    width: 40%;
    font-size: 12px;
  }
`;

const DocInput = styled.input`
  float: left;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 30px;
  width: 50%;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
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
  margin-right: auto;
  margin-left: auto;
  width: 7vw;
  clear: both;

  @media ${({ theme }) => theme.device.ipad} {
    width: 10%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 5rem;
    font-size: 12px;
  }
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
  @media ${({ theme }) => theme.device.mobile} {
    height: 15rem;
  }
`;

const PassWordTitle = styled.span`
  width: 50%;
  padding: 20px;
  float: left;
  font-weight: bold;
  @media ${({ theme }) => theme.device.mobile} {
    float: left;
    font-size: 10px;
    width: 50%;
  }
`;

const PassWordInput = styled.input`
  width: 30%;
  height: 10px;
  margin: 10px;
  float: left;
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    float: center;
    width: 40%;
  }
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
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
    width: 30%;
  }
`;

// 비밀번호 끝

// 대답 시작

const MyreviewTitle = styled.h2`
  color: #095cd8;
  margin: 20px 10px 20px 0px;
`;

// 대답 끝

function DocMypage(props) {
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
      {props.userInfo ? (
        <DocContainer>
          {/* 회원정보 시작 */}
          <Title>회원정보</Title>
          <DocContainerLine>
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
                ) : (
                  <img
                    // src={require(`././uploads/${props.userInfo.profile_img}`)}
                    //사진이름을 한글로 하면 에러뜬다....!
                    src={require(`../../public/uploads/${props.userInfo.profile_img}`)}
                    alt="publicimage"
                  />
                )}
              </Box>
              <ProfileEditing htmlFor="upload_file">편집</ProfileEditing>
              {/* <input
              type="file"
              id="upload_file"
              onChange={handleImgChange}
            ></input> */}
            </Profilecontainer>
            <DocLine>
              <DocTitle>이메일</DocTitle>
              <DocInput type="text" name="val" disabled />
              <DocTitle>이름</DocTitle>
              <DocInput
                type="text"
                placeholder="이름"
                onChange={handleInputChange("name")}
              />
              <DocTitle>병원명</DocTitle>
              <DocInput
                type="text"
                placeholder="병원명"
                onChange={handleInputChange("hospital")}
              />
            </DocLine>
          </DocContainerLine>
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
      ) : (
        ""
      )}
    </>
  );
}

export default DocMypage;
