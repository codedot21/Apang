const fs = require("fs");
const https = require("https");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 4000;
const indexRouter = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE"],
  })
);
app.use(cookieParser());
app.use("/", indexRouter);

module.exports = app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
