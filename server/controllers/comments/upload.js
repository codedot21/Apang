module.exports = (req, res) => {};
// const { comments } = require("../../models");
// const { isAuthorized } = require("../tokenFunctions");

// module.exports = async (req, res) => {
//   const accessTokenData = isAuthorized(req);

//     if (!accessTokenData) {
//       res.status(401).send({ data: null, message: "Invalid Token" });
//     } else if (accessTokenData) {
//       if (
//         req.body.content === "" ||

//       ) {
//         res.status(400).send({ message: "Bad Request" });
//       } else {
//         await qna
//           .create({
//             title: qnaInfo.title,
//             content: qnaInfo.content,
//             users_id: accessTokenData.id, //kakao userid를 적는다. 한자리 숫자가 아니라 여러개라 섞이지 않을듯?
//             category: qnaInfo.category,
//           })
//           .then(() => {
//             res.status(201).send({ message: "QnA Upload Ok" });
//           });
//       }
//     }
//   }
