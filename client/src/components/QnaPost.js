import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import doctor from "../images/doctor.png";

export const QnaDocContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 1rem 2rem;
  padding-right: 30rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: #9bbbd4;
  width: 60%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 6rem;
    // height: 70%;
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

export const EmptyBox = styled.div`
  margin-bottom: 10%;
`;

export const QnaDocBox = styled.div`
  // border: 0.1rem solid #63b5f6;
  color: black;
  border-radius: 10px;
  max-width: 1300px;
  // width: 55%;
  // height: 50%;
  width: 25rem;
  height: 70%;
  // margin-bottom: 2rem;
  background: #ffffff;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 15rem;
    // height: 70%;
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
  // height: 2.2rem;
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
                />
                {auth === 1 ? (
                  <div className="Id">{userInfo.name}</div>
                ) : (
                  <div className="Id">{userInfo.nickname}</div>
                )}
              </ProfileDoc>
              <ContentDocText>{comment}</ContentDocText>
            </ContentWrap>
          </QnaDocBox>
        </QnaDocContainer>
      ))}

      {/* <QnaDocContainer>
        <QnaDocBox>
          <ContentWrap>
            <ProfileDoc>
              <img src={doctor} width="20rem" alt="doctor" />
              <div className="Id">김코딩 선생님</div>
            </ProfileDoc>
            <ContentDocText>
              많이 불편하시겠어요! 평소 음식을 드실때 너무 급하게 먹거나 밀가루
              음식을 많이 드시나요? 평소 식습관이 중요합니다
            </ContentDocText>
          </ContentWrap>
        </QnaDocBox>
      </QnaDocContainer> */}

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
        // <QnaEmptyContainer>
        //   <EmptyBox></EmptyBox>
        // </QnaEmptyContainer>
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
