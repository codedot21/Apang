import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Linked = styled(Link)`
  text-decoration: none;
`;
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
  // display: flex;
  height: 2.2rem;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1rem;
  height: 2rem;
  @media ${({ theme }) => theme.device.mobile} {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1rem;
    height: 2rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  .tag {
    margin-right: 0.5rem;
    margin-top: 0.7rem;
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
    @media ${({ theme }) => theme.device.mobile} {
      margin-top: 0.7rem;
    }
  }
`;

export const ContentComment = styled.div`
  display: flex;
  height: 2.2rem;
  font-size: 0.8rem;
  margin-right: 1rem;
`;

function Qna({ title, nickname, content, profile_img, tags, commentsCount }) {
  // console.log(tags.hashtags);
  return (
    <>
      {title ? (
        <QnaBox>
          <ContentWrap>
            <Profile>
              <img
                src={require(`../../public/uploads/${profile_img}`)}
                alt="profile"
                width="20rem"
              />
              <div className="Id">{nickname}</div>
            </Profile>
            <ContentTitle>{title}</ContentTitle>
            <ContentText>{content}</ContentText>
            <Tag>
              {tags.hashtags.map((tag) => {
                return <div className="tag">{tag.hashtag}</div>;
              })}
            </Tag>
            <ContentComment>{commentsCount}</ContentComment>
          </ContentWrap>
        </QnaBox>
      ) : null}
    </>
  );
}

export default Qna;
