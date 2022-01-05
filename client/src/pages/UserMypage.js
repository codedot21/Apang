import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";

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
  height: 200px;
  width: 80%;
  margin: 0 auto;
`;

const Profile = styled.input`
  float: left;
  width: 30%;
  height: 100px;
  margin-right: 30px;
  text-align: center;
  border: 1px solid #b5afaf;
`;

const UserEmailTitle = styled.div`
  float: left;
  width: 20%;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

const UserEmail = styled.div`
  float: left;
  width: 30%;
  padding: 1rem;
  border-radius: 30px;
`;

const UserNickNameTitle = styled.div`
  float: left;
  width: 20%;
  padding: 1rem;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`;

const NickName = styled.input`
  margin-top: 40px;
  width: 30%;
  padding: 1rem;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 30px;
`;

const ProfileEditing = styled.button`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  padding: 5px;
  color: #fff;
  clear: both;
  width: 10%;
  float: left;
  margin-left: 90px;
  border-radius: 30px;
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

// 마이리뷰 시작

const MyreviewTitle = styled.h2`
  color: #095cd8;
  margin: 20px 10px 20px 0px;
`;

// 마이리뷰 끝

// 마이 큐엔에이 시작
// 마이 큐엔에이 끝

function UserMypage() {
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
  return (
    <>
      <UserContainer>
        {/* 회원정보 시작 */}
        <Title>회원정보</Title>
        <UserContainerLine>
          <ProfileEditing>
            <label htmlFor="upload_file">이미지수정</label>
          </ProfileEditing>
          <Profile
            type="file"
            id="upload_file"
            style={{ display: "none" }}
            onChange={handleInputChange}
          />
          <Box>
            {imgInfo.filepreview !== null ? (
              <img src={imgInfo.filepreview} alt="uploadimage" />
            ) : null}
          </Box>

          <UserEmailTitle>이메일</UserEmailTitle>
          <UserEmail>email</UserEmail>
          <UserNickNameTitle>닉네임</UserNickNameTitle>
          <NickName type="text" placeholder="닉네임" />
          <ProfileEditing>프로필수정</ProfileEditing>
          <NickNameEdit>수정</NickNameEdit>
        </UserContainerLine>

        {/* 회원정보 끝 */}
        <br />
        {/* 비밀번호 시작 */}

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
        <MyreviewTitle>My Review</MyreviewTitle>

        {/* MY Review 끝*/}

        <hr />
        {/*MY Q&A 시작  */}
        <MyreviewTitle>My Q&A</MyreviewTitle>
        {/*MY Q&A 끝  */}
      </UserContainer>
    </>
  );
}

export default UserMypage;
