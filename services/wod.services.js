const { models } = require("../libs/sequelize");

const getWod = async (req, res) => {
  const rta = await models.Wod.findAll();
  res.status(200).json(rta);
};

const getWodById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Wod.findOne({ where: { id } });
  res.json(rta);
};

const createWod = async (req, res) => {
  const { body } = req;
  const rta = await models.Wod.create(body);
  res.json(rta);
};

const updateWod = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  //usar save en lugar de update
  const rta = await models.Wod.update(body, { where: { id } });
  res.json(rta);
};

const deleteWod = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Wod.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getWod,
  getWodById,
  createWod,
  updateWod,
  deleteWod,
};
