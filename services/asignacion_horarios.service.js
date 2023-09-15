const { models } = require("../libs/sequelize");

/**
 * @api {get} /asignacion-horarios/ GetAsignacionHorarios
 * @apiName getAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiSuccess {Object[]} asignaciones Lista de asignaciones de horarios.
 */
const getAsignacionHorarios = async (req, res) => {
  const rta = await models.AsignacionHorarios.findAll();
  res.json(rta);
};

/**
 * @api {get} /asignacion-horarios/:id GetAsignacionHorariosById
 * @apiName getAsignacionHorariosById
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario.
 */
const getAsignacionHorariosById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.AsignacionHorarios.findByPk(id);
  res.json(rta);
};

/**
 * @api {post} /asignacion-horarios/ CreateAsignacionHorarios
 * @apiName createAsignacionHorarios
 * @apiGroup Asignación de Horarios
 * 
 * @apiParam {Number} idAdministrativo ID del administrativo asignado.
 * @apiParam {String} fecha Fecha de la asignación (Formato: "YYYY-MM-DD").
 * @apiParam {Number} idHorario ID del horario asignado.
 * 
 * @apiSuccess {Object} asignacion Información de la asignación de horario creada.
 */
const createAsignacionHorarios = async (req, res) => {
  const { body } = req;
  const administrativo = await models.Administrativo.findOne({ where: { id: body.idAdministrativo } });
  const horario = await models.Horario.findOne({ where: { id: body.idHorario } });

  const asignacionHorarios = await models.AsignacionHorarios.create({
    administrativoId: administrativo.id,
    fecha: body.fecha,
    horarioId: horario.id,
  });

  res.json(asignacionHorarios);
};

/**
 * @api {put} /asignacion-horarios/:id UpdateAsignacionHorarios
 * @apiName updateAsignacionHorarios
 * @apiGroup Asignación de Horarios
 * 
 * @apiParam {Number} id ID único de la asignación de horario.
 * @apiParam {Object} body Información de la asignación de horario a actualizar.
 * 
 * @apiSuccess {Object} asignacion Información de la asignación de horario actualizada.
 */ 
const updateAsignacionHorarios = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.AsignacionHorarios.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /asignacion-horarios/:id DeleteAsignacionHorariosById
 * @apiName deleteAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario a eliminar.
 *
 * @apiSuccess {Object} asignacion Objeto de asignación de horario eliminado.
 */
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
