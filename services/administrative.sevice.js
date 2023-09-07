const { models } = require("../libs/sequelize");

const getAdmin = async (req, res) => {
  const rta = await models.Administrative.findAll();
  res.json(rta);
};

const getAdminById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Administrative.findByPk(id);
  res.json(rta);
};

const createAdmin = async (req, res) => {
  const { body } = req;
  const rta = await models.Administrative.create(body);
  res.json(rta);
};

const updateAdmin = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Administrative.update(body, { where: { id } });
  res.json(rta);
};

const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Administrative.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getAdmin,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
