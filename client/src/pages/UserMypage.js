import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import axios from "axios";

export const UserContainer = styled(Container)`
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
  height: 190px;
  width: 80%;
  margin: 0 auto;
`;

const Profilecontainer = styled.div`
  float: left;
  width: 40%;
  text-align: center;
  height: 80%;

  object-fit: cover;
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
  position: relative;
  top: 2vw;
  right: 4vw;
`;

const UserEmailTitle = styled.div`
  float: left;
  padding: 1rem;
  font-weight: bold;
  width: 20%;
`;

const UserEmail = styled.input`
  float: left;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 30px;
  width: 30%;
  margin-bottom: 20px;
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
  margin-top: 10px;
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

// 마이리뷰 시작

const MyreviewTitle = styled.h2`
  color: #095cd8;
  margin: 20px 10px 20px 0px;
`;

// 마이리뷰 끝

// 마이 큐엔에이 시작
// 마이 큐엔에이 끝

// 상현 수정
function UserMypage(props) {
  console.log(props.userInfo);
  const [imgInfo, setImgInfo] = useState({
    file: [],
    filepreview: null,
  });
  const [userInfo, setUserInfo] = useState({
    nickname: "",
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
    // console.log(formdata);
    formdata.append("nickname", userInfo.nickname);
    axios.post("http://localhost:4000/public/profile", formdata, {
      headers: { "Content-type": "multipart/form-data" },
      withCredentials: true,
    });
    // .then((res) => {
    //   console.warn(res);
    //   if (res.data.success === 1) {
    //     setSuccess("이미지가 성공적으로 업데이트 되었습니다");
    //   }
    // });
  };

  const passwordChange = () => {
    delete userInfo.nickname;
    // console.log("비밀번호 변경 : ", userInfo);
    axios.post("http://localhost:4000/public/profile", userInfo, {
      withCredentials: true,
    });
  };

  return (
    <>
      {props.userInfo ? (
        <UserContainer>
          {/* 회원정보 시작 */}
          <Title>회원정보</Title>
          <UserContainerLine>
            {/* <Profile
            type="file"
            id="upload_file"
            style={{ display: "none" }}
            onChange={handleInputChange}
          /> */}
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
                    // src={`../../public/uploads/${props.userInfo.profile_img}`}
                    alt="publicimage"
                  />
                )}
              </Box>
              <ProfileEditing htmlFor="upload_file">편집</ProfileEditing>
            </Profilecontainer>

            <UserEmailTitle>이메일</UserEmailTitle>
            <UserEmail
              type="text"
              value={props.userInfo.email}
              name="val"
              disabled
            />
            <UserEmailTitle>닉네임</UserEmailTitle>
            <UserEmail
              type="text"
              defaultValue={props.userInfo.nickname}
              onChange={handleInputChange("nickname")}
            />
          </UserContainerLine>
          <Edting onClick={submit}>저장하기</Edting>

          {/* 회원정보 끝 */}
          <br />
          {/* 비밀번호 시작 */}

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
            <EditPasswordDeleted>회원탈퇴</EditPasswordDeleted>
          </Box>
          {/* 비밀번호 끝 */}

          <hr />
          {/* MY Review 시작*/}
          <MyreviewTitle>My Review</MyreviewTitle>

          {/* MY Review 끝*/}

          <hr />
          {/*MY Q&A 시작  */}
          <MyreviewTitle>My Q&A</MyreviewTitle>
          {/*MY Q&A 끝  */}
        </UserContainer>
      ) : (
        ""
      )}
    </>
  );
}

export default UserMypage;
