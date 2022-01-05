module.exports = (req, res) => {
  res.clearCookie("jwt").status(200).send("SignOut Ok");
};
// cookie clear?clean?
