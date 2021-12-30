const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
