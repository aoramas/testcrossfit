const { models } = require("../libs/sequelize");

/**
 * @api {get} /rol/ GetRols
 * @apiName getRol
 * @apiGroup Roles
 *
 * @apiSuccess {Object[]} roles Lista de roles.
 */
const getRol = async (req, res) => {
    const rta = await models.Rol.findAll();
    res.status(200).json(rta);
};

/**
 * @api {get} /rol/:id GetRolById
 * @apiName getRolbyId
 * @apiGroup Roles
 *
 * @apiParam {Number} id ID único del rol.
 *
 * @apiSuccess {Object} rol Información del rol.
 */
const getRolbyId = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Rol.findOne({ where: { id } });
    res.json(rta);
};

/**
 * @api {post} /rol/ CreateRol
 * @apiName createRol
 * @apiGroup Roles
 * 
 * @apiParam {String} nombre Nombre del rol.
 * @apiParam {Number} idPermiso ID del permiso asociado al rol.
 * 
 * @apiSuccess {Object} rol Información del rol creado.
 */
const createRol = async (req, res) => {
    const { body } = req;
    const rta = await models.Rol.create(body);
    res.json(rta);
};

/**
 * @api {put} /rol/:id UpdateRolById
 * @apiName updateRol
 * @apiGroup Roles
 * 
 * @apiParam {Number} id ID único del rol.
 * @apiParam {Object} body Información del rol a actualizar.
 * 
 * @apiSuccess {Object} rol Información del rol actualizado.
 */ 
const updateRol = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Rol.update(body, { where: { id } });
    res.json(rta);
};

/**
 * @api {delete} /rol/:id DeleteRolById
 * @apiName deleteRol
 * @apiGroup Roles
 *
 * @apiParam {Number} id ID único del rol a eliminar.
 *
 * @apiSuccess {Object} rol Objeto de rol eliminado.
 */
const deleteRol = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Rol.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getRol,
    getRolbyId,
    createRol,
    updateRol,
    deleteRol,
};
