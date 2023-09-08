const { models } = require("../libs/sequelize");

const getExercises = async (req, res) => {
  const rta = await models.Exercises.findAll();
  res.json(rta);
};

const getExercisesById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Exercises.findOne({ where: { id } });
  res.json(rta);
};

const createExercises = async (req, res) => {
  const { body } = req;
  const rta = await models.Exercises.create(body);
  res.json(rta);
};

const updateExercises = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Exercises.update(body, { where: { id } });
  res.json(rta);
};

const deleteExercises = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Exercises.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getExercises,
  getExercisesById,
  createExercises,
  updateExercises,
  deleteExercises,
};
