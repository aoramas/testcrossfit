const { models } = require("../libs/sequelize");

const getWodEjercicios = async (req, res) => {
  const rta = await models.WodEjercicios.findAll();
  res.status(200).json(rta);
};

const getWodEjerciciosById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.WodEjercicios.findOne({ where: { id } });
  res.json(rta);
};

const createWodEjercicios = async (req, res) => {
  const { body } = req;
  const rta = await models.WodEjercicios.create(body);
  res.json(rta);
};

const updateWodEjercicios = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  //usar save en lugar de update
  const rta = await models.WodEjercicios.update(body, { where: { id } });
  res.json(rta);
};

const deleteWodEjercicios = async (req, res) => {
  const { id } = req.params;
  const rta = await models.WodEjercicios.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getWodEjercicios,
  getWodEjerciciosById,
  createWodEjercicios,
  updateWodEjercicios,
  deleteWodEjercicios,
};
