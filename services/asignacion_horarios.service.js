const { models } = require("../libs/sequelize");

const getAsignacionHorarios = async (req, res) => {
  const rta = await models.AsignacionHorarios.findAll();
  res.json(rta);
};

const getAsignacionHorariosById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.AsginacionHorarios.findByPk(id);
  res.json(rta);
};

const createAsignacionHorarios = async (req, res) => {};

const updateAsignacionHorarios = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.AsignacionHorarios.update(body, { where: { id } });
  res.json(rta);
};

const deleteAsignacionHorarios = async (req, res) => {
  const { id } = req.params;
  const rta = await models.AsignacionHorarios.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getAsignacionHorarios,
  getAsignacionHorariosById,
  createAsignacionHorarios,
  updateAsignacionHorarios,
  deleteAsignacionHorarios,
};
