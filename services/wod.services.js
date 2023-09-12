const { models } = require("../libs/sequelize");

/**
 * @api {get} /wod/ GetWods
 * @apiName getWod
 * @apiGroup WODs
 *
 * @apiSuccess {Object[]} wods Lista de WODs.
 */
const getWod = async (req, res) => {
  const rta = await models.Wod.findAll();
  res.status(200).json(rta);
};

/**
 * @api {get} /wod/:id GetWodById
 * @apiName getWodById
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD.
 *
 * @apiSuccess {Object} wod Información del WOD.
 */
const getWodById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Wod.findOne({ where: { id } });
  res.json(rta);
};

/**
 * @api {post} /wod/ CreateWod
 * @apiName createWod
 * @apiGroup WODs
 * 
 * @apiParam {String} name Nombre del WOD.
 * @apiParam {Number} idWodEjercicios ID de los ejercicios asociados al WOD.
 * @apiParam {String} fecha Fecha del WOD.
 * 
 * @apiSuccess {Object} wod Información del WOD creado.
 */
const createWod = async (req, res) => {
  const { body } = req;
  const rta = await models.Wod.create(body);
  res.json(rta);
};

/**
 * @api {put} /wod/:id UpdateWodById
 * @apiName updateWod
 * @apiGroup WODs
 * 
 * @apiParam {Number} id ID único del WOD.
 * @apiParam {Object} body Información del WOD a actualizar.
 * 
 * @apiSuccess {Object} wod Información del WOD actualizado.
 */ 
const updateWod = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Wod.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /wod/:id DeleteWodById
 * @apiName deleteWod
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD a eliminar.
 *
 * @apiSuccess {Object} wod Objeto de WOD eliminado.
 */
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
