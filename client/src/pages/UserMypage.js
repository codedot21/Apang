import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Container } from "../styles";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

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
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
    padding: 1vw;
    margin-bottom: 2vw;
  }
`;

const UserContainerLine = styled.div`
  border: 1px solid #b5afaf;
  padding: 2rem;
  height: 190px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
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
  cursor: pointer;
  &:hover {
    background-color: #002171;
  }
  display: block;
  width: 6vw;
  margin: auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    max-width: 8rem;
    font-size: 13px;
  }
`;

const UserTitle = styled.div`
  float: left;
  padding: 1rem;
  font-weight: bold;
  width: 20%;
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
    width: 100%;
    font-size: 15px;
    padding: 1px;
  }
`;

const UserInput = styled.input`
  float: left;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 30px;
  width: 30%;
  margin-bottom: 20px;
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
  cursor: pointer;
  &:hover {
    background-color: #002171;
  }
  display: block;
  margin: auto;
  width: 7vw;

  @media ${({ theme }) => theme.device.ipad} {
    width: 10%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
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
  margin-top: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    height: 16rem;
    width: 100%;
  }
`;

const PassWordTitle = styled.span`
  width: 50%;
  padding: 20px;
  float: left;
  font-weight: bold;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    width: 100%;
    padding: 1px;
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
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
  cursor: pointer;
  &:hover {
    background-color: #002171;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
    width: 50%;
    margin: 10px;
  }
`;

// 비밀번호 끝

// 마이리뷰 qna 시작

const MyreviewTitle = styled.h2`
  color: #095cd8;
  margin: 20px 10px 20px 0px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
`;

const MyreviewContainer = styled.div`
  margin: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin: 0;
  }
`;

const MyreviewLine = styled.div`
  border: 1px solid #b5afaf;
  border-radius: 10px;
  width: 20%;
  height: 100px;
  margin: 1vw;
  float: left;
  background-color: #f9f9f9;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    float: none;
    margin-bottom: 3vw;
  }
`;

const MyreviewTrash = styled.button`
  text-align: right;
  float: right;
  margin: 0.5vw;
  cursor: pointer;
  border: none;
  background-color: #f9f9f9;
  &:hover {
    background-color: #c7c7c7;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 3vw;
  }
`;

const MyreviewNickname = styled.h3`
  width: 40%;
  margin: 1vw 1vw 1vw 0.5vw;
  float: left;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 2vw 3vw 3vw 2vw;
  }
`;

const MyreviewContent = styled.div`
  margin: 0 1vw 1vw 0.5vw;
  border: 1px solid #b5afaf;
  width: 90%;
  padding: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 0 1.5vw 1.5vw 1.5vw;
  }
`;

// 마이리뷰, qna 끝

// 상현 수정
function UserMypage(props) {
  const navigate = useNavigate();
  const [myQnaInfo, setmyQnaInfo] = useState([]);
  const [myReviewInfo, setmyReviewInfo] = useState([]);

  //나의 qna 전부 불러오기
  useEffect(() => {
    axios
      .post(
        "http://localhost:80/qna/info",
        { kakao_userid: localStorage.getItem("userid"), page: "usermypage" },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("myqnainfo?", res.data.myQnaInfo);
        setmyQnaInfo(res.data.myQnaInfo);
      });
  }, []);

  //나의 review 전부 불러오기
  useEffect(() => {
    axios
      .post(
        "http://localhost:80/review/info",
        { kakao_userid: localStorage.getItem("userid"), page: "usermypage" },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setmyReviewInfo(res.data.myReviewInfo);
      });
  }, []);

  console.log(props.userInfo);
  console.log(myQnaInfo);
  const [imgInfo, setImgInfo] = useState({
    // 사진수정
    file: [],
    filepreview: null,
  });

  const [userInfo, setUserInfo] = useState({
    //개인정보수정
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
  const submit = () => {
    const formdata = new FormData();
    formdata.append("apang", imgInfo.file);
    // console.log(formdata);
    formdata.append("nickname", userInfo.nickname);
    formdata.append("token", localStorage.getItem("accessToken"));
    axios.post("http://localhost:80/public/profile", formdata, {
      headers: { "Content-type": "multipart/form-data" },
      withCredentials: true,
    });
  };
  // 비밀번호 변경
  const passwordChange = () => {
    delete userInfo.nickname;
    // console.log("비밀번호 변경 : ", userInfo);
    axios.post("http://localhost:80/public/profile", userInfo, {
      withCredentials: true,
    });
  };

  // 회원탈퇴
  const deleteHandler = () => {
    axios
      .delete("http://localhost:80/common/users", {
        withCredentials: true,
      })
      .then((res) => {
        // 서버에서 넘겨준 auth 잘 불러오는지 확인.
        // console.log(res.data.auth);
        // 로그아웃 상태로 메인페이지로 보내줘야됨
      });
  };

  //내가 쓴 qna 삭제코드
  const handleQnaDelete = (qnaid) => {
    axios
      .delete("http://localhost:80/qna", {
        data: {
          qna_id: qnaid,
          kakao_userid: localStorage.getItem("userid"),
        },
        withCredentials: true,
      })
      .then(() => {
        axios.delete("http://localhost:80/comments", {
          data: {
            qna_id: qnaid,
          },
          withCredentials: true,
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "질문이 성공적으로 삭제되었습니다",
        });
      })
      .then(() => {
        navigate("/");
        navigate(`/mypage/publicprofile`);
      });
  };

  //내가쓴 review 삭제코드
  const handleReviewDelete = (reviewid) => {
    axios
      .delete("http://localhost:80/review", {
        data: {
          review_id: reviewid,
          kakao_userid: localStorage.getItem("userid"),
        },
        withCredentials: true,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "리뷰가 성공적으로 삭제되었습니다",
        });
      })
      .then(() => {
        navigate("/");
        navigate(`/mypage/publicprofile`);
      });
  };

  return (
    <>
      {props.userInfo && myQnaInfo ? (
        <UserContainer>
          {/* 회원정보 시작 */}
          <Title>회원정보</Title>
          {props.userInfo.auth ? (
            <>
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
                    ) : (
                      <img
                        style={{
                          width: "100px",
                          height: "90px",
                          objectFit: "scale-down",
                        }}
                        src={require(`../../public/uploads/${props.userInfo.profile_img}`)}
                        //사진이름 한글 --> 에러!
                        alt="publicimage"
                      />
                    )}
                  </Box>
                  <ProfileEditing htmlFor="upload_file">편집</ProfileEditing>
                </Profilecontainer>

                <UserTitle>이메일</UserTitle>
                <UserInput
                  type="text"
                  value={props.userInfo.email}
                  name="val"
                  disabled
                />
                <UserTitle>닉네임</UserTitle>
                <UserInput
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
                <EditPasswordDeleted onClick={deleteHandler}>
                  회원탈퇴
                </EditPasswordDeleted>
              </Box>
              {/* 비밀번호 끝 */}
            </>
          ) : (
            ""
          )}
          <hr />
          {/* MY Review 시작*/}
          <MyreviewTitle>My Review</MyreviewTitle>
          {myReviewInfo.map((review) => {
            return (
              <MyreviewContainer key={review.id}>
                <MyreviewLine>
                  <MyreviewTrash>
                    <BsTrash onClick={() => handleReviewDelete(review.id)} />
                  </MyreviewTrash>
                  <div style={{ clear: "both" }}></div>
                  <MyreviewContent>{review.hospital_name}</MyreviewContent>
                  <MyreviewContent>{review.content}</MyreviewContent>
                </MyreviewLine>
              </MyreviewContainer>
            );
          })}
          {/* MY Review 끝*/}

          {/* MY Review 끝*/}
          <div style={{ clear: "both" }}></div>
          <br></br>
          <hr />

          {/*MY Q&A 시작  */}

          <MyreviewTitle>My Q&A</MyreviewTitle>
          {myQnaInfo.map((qna) => {
            return (
              <MyreviewContainer key={qna.id}>
                <MyreviewLine>
                  {/* <MyreviewNickname>{qna.user.nickname}</MyreviewNickname> */}
                  <MyreviewTrash>
                    <BsTrash onClick={() => handleQnaDelete(qna.id)} />
                  </MyreviewTrash>
                  <div style={{ clear: "both" }}></div>
                  <MyreviewContent>{qna.category}</MyreviewContent>
                  <MyreviewContent>{qna.title}</MyreviewContent>
                </MyreviewLine>
              </MyreviewContainer>
            );
          })}
          {/*MY Q&A 끝  */}
          <div style={{ clear: "both" }}></div>
        </UserContainer>
      ) : (
        ""
      )}
    </>
  );
}

export default UserMypage;
