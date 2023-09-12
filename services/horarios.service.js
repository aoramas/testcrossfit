const { models } = require("../libs/sequelize");

/**
 * @api {get} /horarios/ GetHorarios
 * @apiName getHorarios
 * @apiGroup Horarios
 *
 * @apiSuccess {Object[]} horarios Lista de horarios.
 */
const getHorarios = async (req, res) => {
    const rta = await models.Horario.findAll();
    res.json(rta);
};

/**
 * @api {get} /horarios/:id GetHorariosById
 * @apiName getHorariosById
 * @apiGroup Horarios
 *
 * @apiParam {Number} id ID único del horario.
 *
 * @apiSuccess {Object} horario Información del horario.
 */
const getHorariosById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Horario.findOne({ where: { id } });
    res.json(rta);
};

/**
 * @api {post} /horarios/ CreateHorarios
 * @apiName createHorarios
 * @apiGroup Horarios
 * 
 * @apiParam {String} diaSemana Día de la semana al que corresponde el horario.
 * @apiParam {String} horaInicio Hora de inicio del horario.
 * @apiParam {String} horaFin Hora de fin del horario.
 * 
 * @apiSuccess {Object} horario Información del horario creado.
 */
const createHorarios = async (req, res) => {
    const { body } = req;
    const rta = await models.Horario.create(body);
    res.json(rta);
};

/**
 * @api {put} /horarios/:id UpdateHorariosById
 * @apiName updateHorarios
 * @apiGroup Horarios
 * 
 * @apiParam {Number} id ID único del horario.
 * @apiParam {Object} body Información del horario a actualizar.
 * 
 * @apiSuccess {Object} horario Información del horario actualizado.
 */ 
const updateHorarios = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Horario.update(body, { where: { id } });
    res.json(rta);
};

/**
 * @api {delete} /horarios/:id DeleteHorariosById
 * @apiName deleteHorarios
 * @apiGroup Horarios
 *
 * @apiParam {Number} id ID único del horario a eliminar.
 *
 * @apiSuccess {Object} horario Objeto de horario eliminado.
 */
const deleteHorarios = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Horario.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getHorarios,
    getHorariosById,
    createHorarios,
    updateHorarios,
    deleteHorarios,
};
