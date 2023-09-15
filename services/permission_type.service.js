const { models } = require("../libs/sequelize");

/**
 * @api {get} /permissiontype/ GetPermission
 * @apiName getPermission
 * @apiGroup Tipos de Permisos
 *
 * @apiSuccess {Object[]} tiposPermisos Lista de tipos de permisos.
 */
const getPermission = async (req, res) => {
    const rta = await models.PermissionType.findAll();
    res.status(200).json(rta);
};

/**
 * @api {get} /permissiontype/:id GetPermissionById
 * @apiName getPermissionById
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso.
 *
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso.
 */
const getPermissionById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.PermissionType.findOne({ where: { id } });
    res.json(rta);
};

/**
 * @api {post} /permissiontype/ CreatePermission
 * @apiName createPermission
 * @apiGroup Tipos de Permisos
 * 
 * @apiParam {String} nombrePermiso Nombre del permiso.
 * @apiParam {String} nemonico Nemonico del permiso.
 * 
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso creado.
 */
const createPermission = async (req, res) => {
    const { body } = req;
    const rta = await models.PermissionType.create(body);
    res.json(rta);
};

/**
 * @api {put} /permissiontype/:id UpdatePermissionById
 * @apiName updatePermission
 * @apiGroup Tipos de Permisos
 * 
 * @apiParam {Number} id ID único del tipo de permiso.
 * @apiParam {Object} body Información del tipo de permiso a actualizar.
 * 
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso actualizado.
 */ 
const updatePermission = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    // Usar save en lugar de update
    const tipoPermiso = await models.PermissionType.findOne({ where: { id } });
    tipoPermiso.nombrePermiso = body.nombrePermiso;
    tipoPermiso.nemonico = body.nemonico;
    await tipoPermiso.save();
    res.json(tipoPermiso);
};

/**
 * @api {delete} /permissiontype/:id DeletePermissionById
 * @apiName deletePermission
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso a eliminar.
 *
 * @apiSuccess {Object} tipoPermiso Objeto de tipo de permiso eliminado.
 */
const deletePermission = async (req, res) => {
    const { id } = req.params;
    const rta = await models.PermissionType.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getPermission,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
};
