import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import Customer from "./Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export const AuthContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  flex-direction: row;
  align-items: left;
`;
const Auth = styled.h1`
  text-align: left;
  width: 100%;
  margin: 0 0 20px 0;
`;

const AuthLine = styled.div`
  border: 1px solid #b5afaf;
  width: 60%;
  height: 1000px;
  margin: 0 auto;
`;

const customers = [
  {
    id: 1,
    email: "apng@naver.com",
    name: "김의사",
    hospital: "김치과",
    license: "000111",
    agree: "false",
  },
  {
    id: 2,
    email: "apng@naver.com",
    name: "김의사",
    hospital: "김치과",
    license: "000111",
    agree: "false",
  },
  {
    id: 3,
    email: "apng@naver.com",
    name: "김의사",
    hospital: "김치과",
    license: "000111",
    agree: "true",
  },
];

function AuthPage() {
  return (
    <>
      <AuthContainer>
        <Auth>관리자</Auth>
        <AuthLine>
          <TableHead>
            <TableRow>
              <TableCell>이메일</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>병원명</TableCell>
              <TableCell>면허번호</TableCell>
              <TableCell>승낙여부</TableCell>
              <TableCell>체크</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  email={c.email}
                  name={c.name}
                  hospital={c.hospital}
                  license={c.license}
                  agree={c.agree}
                />
              );
            })}
          </TableBody>
          <Table />
        </AuthLine>
      </AuthContainer>
    </>
  );
}

export default AuthPage;
