import React from "react";
import styled from "styled-components";
import user from "../images/user.png";

export const QnaBox = styled.div`
  border: 0.1rem solid #63b5f6;
  color: black;
  border-radius: 10px;
  max-width: 1300px;
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;
  :hover {
    box-shadow: #63b5f6 0.1rem 0.1rem 0.1rem 0.1rem;
    text-decoration: none;
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
  .Id {
    margin-left: 0.5rem;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ContentText = styled.div`
  display: flex;
  height: 2.2rem;
  font-size: 0.8rem;
`;

export const Tag = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  .tag {
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    width: auto;
    height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    padding: 0 0.5rem;
    font-size: 0.5rem;
    list-style: none;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.button};
  }
`;

export const ContentComment = styled.div`
  display: flex;
  height: 2.2rem;
  font-size: 0.8rem;
  margin-right: 1rem;
  }
`;

function Qna() {
  return (
    <QnaBox>
      <ContentWrap>
        <Profile>
          <img src={user} width="20rem" />
          <div className="Id">맨날아파</div>
        </Profile>
        <ContentTitle>요즘 소화가 잘 안돼요!</ContentTitle>
        <ContentText>
          자꾸 속이 더부룩하고 소화가 잘 안되는 느낌이 들어요ㅠ
        </ContentText>
        <Tag>
          <div className="tag">#아파요</div>
          <div className="tag">#안아파요</div>
          <div className="tag">#덜아파요</div>
        </Tag>
        <ContentComment>댓글 1</ContentComment>
      </ContentWrap>
    </QnaBox>
  );
}

export default Qna;
