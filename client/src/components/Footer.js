import { FaGithub } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

export const FooterContainer = styled.div`
  // background-color: #dee2e6;
  background-color: ${({ theme }) => theme.color.footer};
  padding: 0.5rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 2560px;
`;

const Title = styled.div`
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 1vw;
  font-size: 18px;
`;

const Lines = styled.div`
  height: 2vw;
  width: 100%;
  margin-left: 10vw;
`;
const Careeres = styled.div`
  color: #fff;
  padding: 7px;
  text-align: center;
  margin-bottom: 1.5vw;
  font-size: 20px;
  float: left;
  width: 20%;
`;

function Footer() {
  return (
    <FooterContainer>
      <Title style={{ fontSize: "20px" }}>
        About Us
        <a
          target="_blank"
          href={"https://github.com/codestates/Apang"}
          style={{ textDecoration: "none", color: "#095cd8" }}
        >
          {" "}
          Apang
        </a>
      </Title>
      <Title>Careers</Title>
      {/* --------{About Us, Careers title 끝}------------ */}

      <Lines>
        <Careeres>
          <a
            target="_blank"
            href={"https://github.com/sangcode33"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <FaGithub /> 권상현 Front end
          </a>
        </Careeres>
        <Careeres>
          <a
            target="_blank"
            href={"https://github.com/gusdnvkfks/"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <FaGithub /> 김경훈 Back end
          </a>
        </Careeres>
        <Careeres>
          <a
            target="_blank"
            href={"https://github.com/codedot21/"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <FaGithub /> 김장겸 Front end
          </a>
        </Careeres>
        <Careeres>
          <a
            arget="_blank"
            href={"https://github.com/riaoh/"}
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <FaGithub /> 오예림 Back end
          </a>
        </Careeres>
      </Lines>

      {/* --------{개인 소개 글 끝}------------ */}

      <Title style={{ clear: "both" }}>
        © Copyright 2022 Apang. The Algoithm Team
      </Title>
    </FooterContainer>
  );
}

export default Footer;
