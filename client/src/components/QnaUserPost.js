import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import user from "../images/user.png";

export const QnaUserContainer = styled(Container)`
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

export const QnaBox = styled.div`
  margin-top: 1rem;
  color: black;
  border-radius: 10px;
  background: #fef01b;
  margin-left: 30rem;
  @media ${({ theme }) => theme.device.ipad} {
    margin-left: 20rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 6rem;
  }
`;

export const ContentWrap = styled.div`
  margin: 1rem 1rem 1rem 1rem;
  .content-info-last {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContentProfileWrap = styled.div`
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
  @media ${({ theme }) => theme.device.mobile} {
    // margin-left: 7rem;
  }
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

function QnaUserPost({ qnaDetail }) {
  console.log(qnaDetail);
  return (
    <QnaUserContainer>
      <QnaBox>
        <ContentWrap>
          <Profile>
            <img src={user} width="20rem" alt="doctor" />
            <div className="Id">맨날아파</div>
          </Profile>
          <ContentTitle>{qnaDetail.title}</ContentTitle>
          <ContentText>{qnaDetail.content}</ContentText>
        </ContentWrap>
      </QnaBox>
    </QnaUserContainer>
  );
}

export default QnaUserPost;
