import React from "react";
import styled from "styled-components";
import Sample from "../images/sample.png";

const DivBox = styled.div``;

const DetailLine = styled.div`
  border: 1px solid #63b5f6;
  height: 100%;
  width: 69%;
  float: right;

  & h3 {
    text-align: left;
    margin: 1vw;
    color: #63b5f6;
  }

  & div {
    text-align: left;
    margin: 1vw;
  }
`;

const Img = styled.img`
  width: 80%;
  margin: 1vw;
`;

const MedicalDetail = ({ medicalInfo }) => {
  console.log("detail : ", medicalInfo);
  return (
    <DivBox>
      <DetailLine>
        <h3>{medicalInfo.place_name}</h3>
        <Img src={Sample}></Img>
        <h3 style={{ margin: "1vw", color: "black" }}>병원주소</h3>
        <div>{medicalInfo.address_name}</div>
        <h3 style={{ margin: "1vw", color: "black" }}>전화</h3>
        <div>{medicalInfo.phone}</div>

        <hr></hr>

        <h2 style={{ margin: "1vw" }}>리뷰</h2>
      </DetailLine>
    </DivBox>
  );
};

export default MedicalDetail;
