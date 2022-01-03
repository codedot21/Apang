const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  await users.destroy({
    where: { id: req.body.id },
  });
  res.status(200).send({ message: "Delete OK" });
};
