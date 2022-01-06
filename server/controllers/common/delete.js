const { users, doctors } = require("../../models");

module.exports = async (req, res) => {
  await users.destroy({
    where: { id: req.body.id },
  });
  await doctors.destroy({
    where: { id: req.body.id },
  });
  res.status(200).send({ message: "Delete OK" });
};
