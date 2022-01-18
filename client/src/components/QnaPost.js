import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Container } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

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
  .commentFront {
    cursor: pointer;
    margin-left: 18rem;
    @media ${({ theme }) => theme.device.ipad} {
      margin-left: 1.2rem;
      font-size: 0.7rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      margin-left: 1.5rem;
      font-size: 0.5rem;
    }
  }
  .commentMiddle {
    cursor: pointer;
    margin-left: 0.5rem;
    @media ${({ theme }) => theme.device.ipad} {
      margin-left: 0.8rem;
      font-size: 0.7rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      font-size: 0.5rem;
    }
  }
  .commentBack {
    cursor: pointer;
    margin-left: 0.5rem;
    @media ${({ theme }) => theme.device.ipad} {
      margin-left: 0.8rem;
      font-size: 0.7rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      margin-left: 0;
      font-size: 0.5rem;
    }
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
    /* whitespace: pre-line; */
    resize: none;
    display: block;
    outline: none;
    border: none;
    width: 100%;
    height: 10rem;
    font-size: 0.8rem;
  }
`;

export const Ren = styled.div`
  > textarea {
    /* whitespace: pre-line; */
    resize: none;
    outline: none;
    border: hidden;
    width: 100%;
    height: 5rem;
    font-size: 0.8rem;
    @media ${({ theme }) => theme.device.mobile} {
      margin-: auto;
    }
    :enabled {
      border: 0.1rem solid #dee2e6;
      border-radius: 10px;
      &:focus {
        outline: 0.1rem solid #63b5f6;
      }
    }
    :disabled {
      background: none;
      color: black;
    }
  }
`;

function QnaPost({ isLogin, userInfo, auth }) {
  let i = 0;
  const navigate = useNavigate();
  const [contentInfo, setContentInfo] = useState({
    content: "",
  });

  const [editContent, setEditContent] = useState({
    edittingcontent: "",
  });

  const [comments, setComments] = useState([]);

  const handleInputChange = (key) => (e) => {
    setContentInfo({
      ...contentInfo,
      [key]: e.target.value,
    });
  };

  const handleInputContentChange = (key) => (e) => {
    setEditContent({
      ...editContent,
      [key]: e.target.value,
    });
  };

  let url = document.location.href;
  let qna_id = url.split("/");
  qna_id = qna_id[qna_id.length - 1];
  // console.log(qna_id);

  useEffect(() => {
    axios
      .post(
        "https://localhost:80/comments/info",
        { qna_id: qna_id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setComments(res.data.comments);
        console.log("QnaPost : ", res.data.comments.length);
      });
  }, []);

  const handleClick = () => {
    if (auth === 1) {
      // console.log("content몰까?", contentInfo);
      let payload = { content: contentInfo.content, qna_id: qna_id };
      axios
        .post("https://localhost:80/comments/upload", payload, {
          withCredentials: true,
        })
        .then((res) => {
          navigate("/qna");
          navigate(`/qna/detail/${qna_id}`);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "의사 선생님이신가요?",
        text: "선생님만 답변하실 수 있어요",
      });
    }
  };
  const inputRef = useRef(null);

  const handleEdit = (doctorid, i) => {
    if (doctorid !== userInfo.id) {
      Swal.fire({
        icon: "error",
        // title: "의사 선생님이신가요?",
        text: "작성자만 수정하실 수 있어요",
      });
      return;
    } else if (doctorid === userInfo.id) {
      inputRef.current.disabled = false;
      inputRef.current[i].focus();
    }
  };

  const handleDelete = (commentid) => {
    axios
      .delete("https://localhost:80/comments", {
        data: {
          comment_id: commentid,
        },
        withCredentials: true,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "댓글이 성공적으로 삭제되었습니다",
        });
      })
      .then(() => {
        navigate("/qna");
        navigate(`/qna/detail/${qna_id}`);
      });
  };

  const handleClear = (commentid, doctorid) => {
    inputRef.current.disabled = true;
    let payload = {
      content: editContent.edittingcontent,
      comment_id: commentid,
      doctor_id: doctorid,
    };
    axios
      .put("https://localhost:80/comments/modify", payload, {
        withCredentials: true,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "댓글이 성공적으로 수정되었습니다",
        });
      })
      .then(() => {
        navigate("/qna");
        navigate(`/qna/detail/${qna_id}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          // title: "의사 선생님이신가요?",
          text: "작성자만 수정하실 수 있어요",
        });
      });
  };

  return (
    <>
      {/* 답변 시작 끝 */}
      {comments.map((comment) => {
        return (
          <QnaDocContainer>
            <QnaDocBox>
              <ContentWrap id={i}>
                {/* userInfo o, 로그인 o, 의사, 본인 작성했을시 */}
                {userInfo &&
                isLogin &&
                auth === 1 &&
                comment.doctors_id === userInfo.id ? (
                  <>
                    <ProfileDoc>
                      <img
                        src={require(`../../public/uploads/${comment.doctor.profile_img}`)}
                        width="20rem"
                        alt="doctor"
                      />
                      <div className="Id">
                        {`${comment.doctor.name} 의사선생님`}
                        <span
                          value="수정"
                          className="commentFront"
                          onClick={() => handleEdit(comment.doctors_id, i)}
                        >
                          수정
                        </span>
                        <span className="commentMiddle">|</span>
                        <span
                          value="등록"
                          className="commentBack"
                          onClick={() =>
                            handleClear(comment.id, comment.doctors_id)
                          }
                        >
                          등록
                        </span>
                        <span className="commentMiddle">|</span>
                        <span
                          className="commentBack"
                          onClick={() => handleDelete(comment.id)}
                        >
                          삭제
                        </span>
                      </div>
                    </ProfileDoc>
                    <Ren>
                      <textarea
                        id={i}
                        disabled
                        type="text"
                        defaultValue={comment.content}
                        ref={inputRef}
                        onChange={handleInputContentChange("edittingcontent")}
                        // value={editContent.edittingcontent}
                      />
                    </Ren>
                    {(i += 1)}
                  </>
                ) : (
                  //userInfo x || 로그인 x || 의사 x || 본인 작성 x
                  <>
                    <ProfileDoc>
                      <img
                        src={require(`../../public/uploads/${comment.doctor.profile_img}`)}
                        width="20rem"
                        alt="doctor"
                      />
                      <div className="Id">{`${comment.doctor.name} 의사선생님`}</div>
                    </ProfileDoc>
                    <ContentDocText>{comment.content}</ContentDocText>
                  </>
                )}
              </ContentWrap>
            </QnaDocBox>
          </QnaDocContainer>
        );
      })}
      {/* 답변 끝 */}
      {/* 댓글창 시작 */}
      <QnaPostContainer>
        <TagsInput>
          <textarea
            className="textarea"
            type="textarea"
            placeholder={
              isLogin && auth === 1
                ? "선생님의 답변을 기다리고 있어요"
                : "선생님만 답변하실 수 있어요"
            }
            onChange={handleInputChange("content")}
            value={contentInfo.content}
          />
        </TagsInput>
      </QnaPostContainer>
      <QnaListContainer>
        <QnaWrap>
          <QnaWrap>
            <Button onClick={handleClick}>댓글달기</Button>
          </QnaWrap>
        </QnaWrap>
      </QnaListContainer>
      {/* 댓글창 끝 */})
    </>
  );
}

export default QnaPost;
