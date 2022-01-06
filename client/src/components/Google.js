import axios from "axios";

const authorizationCode = url.searchParams.get("code");
// const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받음.

const Google = async (authorizationCode) => {
  await axios({
    url: "http://localhost:4000/oauth/google",
    method: "post",
    data: { authorizationCode },
    withCredentials: true,
  });
}).then((res) => {
  const ACCESS_TOKEN = res.data.access_token;
  axios
    .post("http://localhost:4000/oauth/google", {
      access_token: ACCESS_TOKEN,
    })
    .then((res) => {
      console.log("들어오나?")
    });

  return <></>;
};

export default Google;
