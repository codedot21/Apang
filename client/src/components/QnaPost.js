import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const QnaDocContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 0 1rem 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  z-index: 1;
  background: #9bbbd4;
  width: 71.5rem;
  @media ${({ theme }) => theme.device.ipad} {
    width: 45.8rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 21.4rem;
  }
`;

export const QnaEmptyContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 1rem 2rem;
  padding-right: 30rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: white;
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
  margin-bottom: auto;
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
    margin-left: 16rem;
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

export const EmptyBox = styled.div`
  margin-bottom: 10%;
`;

export const QnaDocBox = styled.div`
  margin-top: 1rem;

  color: black;
  border-radius: 10px;

  background: #ffffff;
  margin-right: 30rem;
  @media ${({ theme }) => theme.device.ipad} {
    margin-right: 20rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-right: 6rem;
  }
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
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 26rem;
  @media ${({ theme }) => theme.device.ipad} {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 12rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 12rem;
  }
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
    whitespace: pre-line;
    resize: none;
    display: block;
    outline: none;
    border: none;
    width: 100%;
    height: 10rem;
    font-size: 0.8rem;
  }
`;

function QnaPost({ isLogin, userInfo, auth }) {
  const handleClick = () => {
    Swal.fire({
      icon: "error",
      title: "의사 선생님이신가요?",
      text: "선생님만 답변하실 수 있어요",
    });
  };

  const [comment, setComment] = useState([]);

  const addComment = (event) => {
    const result = [];
    for (let el of comment) {
      if (el === event.target.value) result.push(event.target.value);
    }
    if (result.length === 0 && event.target.value !== "") {
      setComment([...comment, event.target.value]);
      event.target.value = "";
    }
  };
  // 임시 만드는거
  const inputRef = useRef(null);
  // const inputUpdateRef = useRef(null);
  // const [commentId, setCommentId] = useState(null);
  function handleFocus() {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }
  function handleReset() {
    inputRef.current.disabled = true;
  }

  // 댓글 요청
  // const commentPost = () => {
  //   if (islogin && auth === 1 && inputRef.current.value !== "") {
  //   axios.post('http://localhost:80/comment', {
  //   qna_id: id,
  //   content: inputRef.current.value,
  //   })
  //   .then((res) => {
  //  setComment([...res.data.data]);
  //   })

  return (
    <>
      {comment.map((comment, index) => (
        <QnaDocContainer key={index}>
          <QnaDocBox>
            <ContentWrap>
              <ProfileDoc>
                <img
                  src={require(`../../public/uploads/${userInfo.profile_img}`)}
                  width="20rem"
                  alt="profile"
                />
                {auth === 1 ? (
                  <div className="Id">{userInfo.name}</div>
                ) : (
                  <div className="Id">{userInfo.nickname}</div>
                )}
              </ProfileDoc>
              {isLogin & (auth === 1) ? (
                <ContentDocText>{comment}</ContentDocText>
              ) : (
                <input
                  disabled
                  type="text"
                  ref={inputRef}
                  defaultValue={comment}
                />
              )}
            </ContentWrap>
            {isLogin & (auth === 1)
              ? null
              : // <div>
                //   <button onClick={handleFocus}>수정</button>
                //   <button onClick={handleReset}>확인</button>
                // </div>
                null}
          </QnaDocBox>
        </QnaDocContainer>
      ))}

      {isLogin & (auth === 1) ? (
        <QnaPostContainer>
          <TagsInput>
            <textarea
              className="textarea"
              type="textarea"
              placeholder="선생님의 답변을 기다리고 있어요"
              onKeyUp={(e) => (e.key === "Enter" ? addComment(e) : null)}
            />
          </TagsInput>
        </QnaPostContainer>
      ) : (
        <QnaPostContainer>
          <TagsInput>
            <textarea
              className="textarea"
              type="textarea"
              placeholder="선생님만 답변하실 수 있어요"
              onClick={handleClick}
            />
          </TagsInput>
        </QnaPostContainer>
      )}
      <QnaListContainer>
        <QnaWrap>
          <QnaWrap>
            {isLogin & (auth === 1) ? (
              <Button>댓글달기</Button>
            ) : (
              <Button onClick={handleClick}>댓글달기</Button>
            )}
          </QnaWrap>
        </QnaWrap>
      </QnaListContainer>
    </>
  );
}

export default QnaPost;
