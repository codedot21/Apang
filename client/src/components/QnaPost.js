import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import doctor from "../images/doctor.png";
import axios from "axios";

export const QnaDocContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 1rem 2rem;
  padding-right: 30rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const QnaListContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 1rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const QnaPostContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QnaWrap = styled.div`
  // display: block;
  // margin-left: 0;
  // margin-right: 0;
  width: 100%;
  @media ${({ theme }) => theme.device.ipad} {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const ContentPostWrap = styled.div`
  margin: 1rem 1rem 1rem 1rem;
  .content-info-last {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.button};
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  width: 5rem;
  height: 2rem;
  margin-bottom: 1rem;
  margin-left: 69.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
  @media ${({ theme }) => theme.device.ipad} {
    width: 4rem;
    margin-left: 40rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 4rem;
    margin-left: 15rem;
  }
`;

export const Linked = styled(Link)`
  text-decoration: none;
`;

export const QnaBox = styled.div`
  border: 0.1rem solid #63b5f6;
  float: right;
  color: black;
  border-radius: 10px;
  max-width: 1300px;
  width: 46%;
  height: 50%;
  // margin-bottom: 2rem;
`;

export const QnaDocBox = styled.div`
  border: 0.1rem solid #63b5f6;
  color: black;
  border-radius: 10px;
  max-width: 1300px;
  width: 48%;
  height: 50%;
  // margin-bottom: 2rem;
`;

export const ContentWrap = styled.div`
  margin: 1rem 1rem 1rem 1rem;
  .content-info-last {
    display: flex;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  float: right;
  .Id {
    margin-left: 0.5rem;
  }
`;

export const ProfileDoc = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  .Id {
    margin-left: 0.5rem;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  float: right;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ContentText = styled.div`
  display: flex;
  height: 2.2rem;
  float: right;
  font-size: 0.8rem;
`;

export const ContentDocText = styled.div`
  display: flex;
  height: 2.2rem;
  font-size: 0.8rem;
`;

export const TagsInput = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 1rem;
  width: 71.6rem;
  padding: 0 0.5rem;
  border: 0.2rem solid #63b5f6;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
    margin-left: 0;
    width: 21.5rem;
  }

  > textarea {
    resize: none;
    display: block;
    outline: none;
    border: none;
    width: 100%;
    height: 10rem;
    font-size: 0.8rem;
  }
`;

function QnaPost({ isLogin }) {
  const navigate = useNavigate();
  const [contentInfo, setContentInfo] = useState({
    content: "",
  });

  const handleInputChange = (key) => (e) => {
    setContentInfo({
      ...contentInfo,
      [key]: e.target.value,
    });
  };

  let qna_id = document.location.href;
  qna_id = qna_id.substring(qna_id.length - 1, qna_id.length);
  console.log(qna_id);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:80/comments/info",
        { qna_id: qna_id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("모니?", res);
        setComments(res.data.comments);
      });
  }, []);

  // console.log(qna_id);
  const handleClick = () => {
    if (localStorage.getItem("auth") === "1") {
      console.log("content몰까?", contentInfo);
      let payload = { content: contentInfo.content, qna_id: qna_id };
      axios
        .post("http://localhost:80/comments/upload", payload, {
          withCredentials: true,
        })
        .then((res) => {
          navigate("/qna");
          navigate(`/qna/detail/${qna_id}`);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "의사 선생님이신가요?",
        text: "선생님만 답변하실 수 있어요",
      });
    }
  };

  return (
    <>
      {comments.map((comment) => {
        return (
          <QnaDocContainer>
            <QnaDocBox>
              <ContentWrap>
                <ProfileDoc>
                  <img src={doctor} width="20rem" alt="doctor" />
                  <div className="Id">김코딩 선생님</div>
                </ProfileDoc>
                <ContentDocText>{comment.content}</ContentDocText>
              </ContentWrap>
            </QnaDocBox>
          </QnaDocContainer>
        );
      })}

      <QnaPostContainer>
        <TagsInput>
          <textarea
            className="textarea"
            type="textarea"
            placeholder="내용을 입력해주세요"
            onChange={handleInputChange("content")}
            value={contentInfo.content}
          />
          {/* <input
              id="loginEmail"
              type="email"
              placeholder="이메일"
              onChange={handleInputChange("email")}
              value={userInfo.email}
            /> */}
        </TagsInput>
      </QnaPostContainer>

      <QnaListContainer>
        <QnaWrap>
          <QnaWrap>
            {/* {isLogin ? (
              <Button>댓글달기</Button>
            ) : (
              <Button onClick={handleClick}>댓글달기</Button>
            )} */}
            <Button onClick={handleClick}>댓글달기</Button>
          </QnaWrap>
        </QnaWrap>
      </QnaListContainer>
    </>
  );
}

export default QnaPost;
