<<<<<<< Updated upstream
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> Stashed changes
import styled from "styled-components";
import Sample from "../images/sample.jpg";
import Pp from "../images/pp.jpg";
import axios from "axios";

const DivBox = styled.div`
<<<<<<< Updated upstream
  border: 1px solid #63b5f6;
=======
  // border: 1px solid #63b5f6;
>>>>>>> Stashed changes
  width: 70%;
  height: 30vw;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-image: url(${Sample});
  background-size: 100% 30vw;
  @media ${({ theme }) => theme.device.mobile} {
<<<<<<< Updated upstream
    width: 60%;
=======
    width: 90%;
>>>>>>> Stashed changes
  }
`;

const DetailLine = styled.div`
  // border: 2px solid #63b5f6;
  height: 100%;
<<<<<<< Updated upstream
  width: 78%;
=======
  width: 73%;
>>>>>>> Stashed changes
  float: right;

  & h1 {
    text-align: left;
<<<<<<< Updated upstream
    margin: 3vw 0 3vw 1vw;
    color: #095cd8;
    font-size: 50px;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 2rem;
      margin: 5vw 0 4vw 1vw;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    border: none;
    border: 2px solid #63b5f6;
    margin-top: 10px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 29.8vw;
  background: #fff;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const ImgReview = styled.img`
  width: 100%;
  height: 147px;
  border-radius: 20px;
  /* objectfit: scale-down; */
  background: #fff;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Profile = styled.input``;

const ProfileEditing = styled.label`
  // border: 1px solid #63b5f6;
  // background-color: #63b5f6;
  color: #7e57c2;
  // border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #4d2c91;
=======
    margin: 2vw;
    color: #095cd8;
>>>>>>> Stashed changes
  }
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 10px;
    &:hover {
      color: #4d2c91;
    }
  }
`;
const DivBox1 = styled.div`
  border: 1px solid #63b5f6;
  width: 20%;
  height: 148px;
  float: left;
  margin: 0 10px 10px 10px;
  border-radius: 20px;
  background-image: url(${Sample});
  background-size: 100% 148px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
    float: none;
    margin: 0 auto;
  }
`;

const ProfileEditing2 = styled.label`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  text-align: center;
  color: #7e57c2;
  font-weight: bold;
  &:hover {
    color: #4d2c91;
  }
  height: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    font-size: 13px;
  }
`;

const Box = styled.div`
  margin: 0 atuo;
`;

const SmallTitle = styled.h2`
  margin: 3.5vw 0 1vw 1vw;
  padding: 0.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 9vw 0 5vw 1vw;
    padding: 1vw;
    text-align: left;
  }
`;

<<<<<<< Updated upstream
const Divtag = styled.div`
  margin: 1.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 3vw;
    text-align: left;
  }
`;

const Divtag2 = styled.div`
  margin: 1.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 3vw;
    text-align: left;
  }
`;

const Review = styled.h2`
  margin: 2vw;
  float: left;
  @media ${({ theme }) => theme.device.mobile} {
    float: left;
    text-align: left;
    font-size: 20px;
  }
`;

const Button = styled.button`
  margin: 2vw;
  float: right;
  border: 2px solid #63b5f6;
  background-color: #63b5f6;
  border-radius: 30px;
  color: #fff;
  padding: 3px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 20%;
    float: right;
    font-size: 0.8rem;
    margin-bottom: 5vw;
  }
`;

const ReviewContainer = styled.div`
  padding-bottom: 2rem;
`;

const ReviewNik = styled.input`
  display: block;
  width: 20%;
  height: 2rem;
  border: none;
  margin-bottom: 5px;
  font-weight: bold;
  background-color: white;
  color: #095cd8;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 1vw;
    width: 100%;
    background: none;
    font-size: 13px;
  }
`;

=======
  @media ${({ theme }) => theme.device.mobile} {
    width: 54%;
    font-size: 0.5rem;
    text-align: center;
    border: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 29.9vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const ImgReview = styled.img`
  width: 100%;
  height: 145px;
  border-radius: 20px;
  objectfit: scale-down;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 50px;
  }
`;

const Profile = styled.input``;

const ProfileEditing = styled.label`
  border: 1px solid #63b5f6;
  background-color: #63b5f6;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #002171;
  }
  display: block;
  width: 20%;
  margin: 0 auto;
  margin-top: 1vw;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
    max-width: 8rem;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const DivBox1 = styled.div`
  border: 1px solid #63b5f6;
  width: 20%;
  height: 145px;
  float: left;
  margin: 0 10px 10px 10px;
  border-radius: 20px;
  background-image: url(${Pp});
  background-size: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    float: none;
  }
`;

const ProfileEditing2 = styled.label`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height:100%;
`;

const Box = styled.div`
  margin: 0 atuo;
`;

const SmallTitle = styled.h2`
  margin: 1vw;
  padding: 0.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
    text-align: left;
  }
`;

const Divtag = styled.div`
  margin: 1.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 3vw;
    text-align: left;
  }
`;

const Divtag2 = styled.div`
  margin: 1.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 3vw;
    text-align: left;
  }
`;

const Review = styled.h2`
  margin: 2vw;
  float: left;
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
    float: none;
  }
`;

const Button = styled.button`
  margin: 2vw;
  float: right;
  border: 2px solid #63b5f6;
  background-color: #63b5f6;
  border-radius: 30px;
  color: #fff;
  padding: 3px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
    float: none;
    font-size: 0.8rem;
  }
`;

const ReviewContainer = styled.div`
  padding-bottom: 2rem;
`;

const ReviewNik = styled.input`
  display: block;
  width: 20%;
  height: 2rem;
  border: none;
  margin-bottom: 5px;
  font-weight: bold;
  background-color: white;
  color: #095cd8;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    font-size: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

>>>>>>> Stashed changes
const ReviewTextarea = styled.textarea`
  width: 70%;
  height: 4.8rem;
  border: 1px solid #63b5f6;
<<<<<<< Updated upstream
  resize: none;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 5rem;
  }
`;

const MedicalDetail = ({ medicalInfo, userInfo }) => {
  // console.log("detail :", medicalInfo);
  // console.log("userInof :", userInfo); 유저 닉네임

=======
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 10rem;
  }
`;

const MedicalDetail = ({ medicalInfo }) => {
  // console.log("detail :", medicalInfo);
>>>>>>> Stashed changes
  //병원 이미지 저장
  const [fileImage, setFileImage] = useState("");

  //파일저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  //병원 이미지 저장 끝

  //영수증 저장 시작
  const [reviews, setReviews] = useState("");

  const saveReviewsImage = (e) => {
    setReviews(URL.createObjectURL(e.target.files[0]));
  };
  //영수증 저장 끝

  //리뷰
<<<<<<< Updated upstream
  const [review, setReview] = useState([]);
=======

  const [userReview, setUserReview] = useState([]);
>>>>>>> Stashed changes

  return (
    <>
      <DetailLine>
        <h1>{medicalInfo.place_name}</h1>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        {/* 사진업로드 시작 */}
        <DivBox>
          {fileImage && (
            <Box>
              <Img src={fileImage} alt="uploadimg" />
            </Box>
          )}
          <Profile
            type="file"
            id="upload_file"
            style={{
              display: "none",
            }}
            onChange={saveFileImage}
          />
<<<<<<< Updated upstream
          <ProfileEditing htmlFor="upload_file" onChange={saveFileImage}>
            사진 업로드
          </ProfileEditing>
        </DivBox>
        {/* <ProfileEditing htmlFor="upload_file" onChange={saveFileImage}>
          사진 업로드
        </ProfileEditing> */}
        {/* 사진업로드 끝 */}
=======
        </DivBox>
        <ProfileEditing htmlFor="upload_file" onChange={saveFileImage}>
          사진 업로드
        </ProfileEditing>
        {/* 사진업로드 끝 */}

>>>>>>> Stashed changes
        {/* 리스트 */}
        <SmallTitle>병원주소</SmallTitle>
        <Divtag>{medicalInfo.address_name} </Divtag>
        <SmallTitle>전화</SmallTitle>
        <Divtag2>{medicalInfo.phone} </Divtag2>
        {/* 리스트 끝 */}
<<<<<<< Updated upstream
        <hr></hr>

        {/* 리뷰작성 시작 */}
        <Review>리뷰</Review>

        <Button type="submit">리뷰쓰기</Button>
=======

        <hr></hr>

        {/* 리뷰작성 시작 */}

        <Review>리뷰</Review>

        <Button>리뷰쓰기</Button>
>>>>>>> Stashed changes

        <div style={{ clear: "both" }}></div>
        <ReviewContainer>
          <DivBox1>
            {reviews && (
              <Box>
                <ImgReview src={reviews} alt="uploadimg" />
              </Box>
            )}
<<<<<<< Updated upstream
=======

            <Profile
              type="file"
              id="upload-file"
              style={{
                display: "none",
              }}
              onChange={saveReviewsImage}
            />
            <ProfileEditing2 htmlFor="upload-file" onChange={saveReviewsImage}>
              영수증 업로드
            </ProfileEditing2>
          </DivBox1>

          <ReviewNik placeholder="닉네임" type="text" disabled />
          <ReviewNik disabled value={medicalInfo.place_name} />
          <ReviewTextarea placeholder="'내용' 입력 후 '리뷰쓰기' 버튼을 눌러주세요." />
        </ReviewContainer>

        <hr></hr>
        <br></br>
        {/* 리뷰작성 끝 */}

        {/* usrNickname불러오면 맵함수 이용하여 리뷰 작성시 이쪽으로 뿌려질 수 있게 */}
        <ReviewContainer>
          <DivBox1>
            {reviews && (
              <Box>
                <ImgReview src={reviews} alt="uploadimg" />
              </Box>
            )}

            <Profile
              type="file"
              id="upload-file"
              style={{
                display: "none",
              }}
              onChange={saveReviewsImage}
            />
            <ProfileEditing2 htmlFor="upload-file" onChange={saveReviewsImage}>
              영수증 업로드
            </ProfileEditing2>
          </DivBox1>

          <ReviewNik placeholder="닉네임" type="text" disabled />
          <ReviewNik disabled value={medicalInfo.place_name} />
          <ReviewTextarea placeholder="'내용' 입력 후 '리뷰쓰기' 버튼을 눌러주세요." />
        </ReviewContainer>
>>>>>>> Stashed changes

            <Profile
              type="file"
              id="upload-file"
              style={{
                display: "none",
              }}
              onChange={saveReviewsImage}
            />
            <ProfileEditing2 htmlFor="upload-file" onChange={saveReviewsImage}>
              영수증 업로드
            </ProfileEditing2>
          </DivBox1>

          <ReviewNik
            placeholder="닉네임"
            type="text"
            disabled
            //value={userInfo.nickname}
          />
          <ReviewNik
            placeholder="병원명"
            type="text"
            disabled
            value={medicalInfo.place_name}
          />
          <ReviewTextarea placeholder="'내용' 입력 후 '리뷰쓰기' 버튼을 눌러주세요." />
        </ReviewContainer>
        <hr></hr>
        <br></br>
<<<<<<< Updated upstream
        {/* 리뷰작성 끝 */}

        {review.map(() => {
          <ReviewContainer>
            <DivBox1>
              {reviews && (
                <Box>
                  <ImgReview src={reviews} alt="uploadimg" />
                </Box>
              )}

              <Profile
                type="file"
                id="upload-file"
                style={{
                  display: "none",
                }}
                onChange={saveReviewsImage}
              />
              <ProfileEditing2
                htmlFor="upload-file"
                onChange={saveReviewsImage}
              >
                영수증 업로드
              </ProfileEditing2>
            </DivBox1>

            <ReviewNik
              disabled
              placeholder="닉네임"
              type="text"
              //value={userInfo.nickname}
            />
            <ReviewNik disabled value={medicalInfo.place_name} />
            <ReviewTextarea placeholder="'내용' 입력 후 '리뷰쓰기' 버튼을 눌러주세요." />
          </ReviewContainer>;
        })}
=======
>>>>>>> Stashed changes

        {/* 리뷰 끝 */}
      </DetailLine>
    </>
  );
};

export default MedicalDetail;
