import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import user from "../images/user.png";

export const QnaUserContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  padding: 0 1rem 1rem;
  padding-left: 30rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: #9bbbd4;
  width: 60%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 1rem;
    margin-right: 10rem;
    // height: 70%;
  }
`;

export const QnaBox = styled.div`
  // border: 0.1rem solid #63b5f6;
  margin-top: 1rem;
  // float: right;
  color: black;
  border-radius: 10px;
  max-width: 1300px;
  // width: 55%;
  // height: 50%;
  width: 25rem;
  height: 70%;
  background: #fef01b;
  @media ${({ theme }) => theme.device.mobile} {
    margin-right: 15rem;
    // width: 45rem;
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
  // height: 2.2rem;
  font-size: 0.8rem;
`;

function QnaUserPost() {
  return (
    <QnaUserContainer>
      <QnaBox>
        <ContentWrap>
          {/* <Profile>
            <img src={user} width="20rem" alt="doctor" />
            <div className="Id">맨날아파</div>
          </Profile> */}
          <ContentTitle>요즘 소화가 잘 안돼요!</ContentTitle>
          <ContentText>
            자꾸 속이 더부룩하고 소화가 잘 안되는 느낌이 들어요ㅠ
          </ContentText>
        </ContentWrap>
      </QnaBox>
    </QnaUserContainer>
  );
}

export default QnaUserPost;
