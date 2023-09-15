const { models } = require("../libs/sequelize");

/**
 * @api {get} /user/ GetUsers
 * @apiName getUser
 * @apiGroup Usuarios
 * 
 * @apiSuccess {Object[]} users Lista de usuarios.
 */
const getUser = async (req, res) => {
    const rta = await models.User.findAll();
    res.status(200).json(rta);
};

/**
 * @api {get} /user/:id GetUserById
 * @apiName getUserById
 * @apiGroup Usuarios
 *
 * @apiParam {Number} id ID único del usuario.
 *
 * @apiSuccess {Object} user Información del usuario.
 */
const getUserById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.User.findOne({ where: { id } });
    res.json(rta);
};

/**
 * @api {post} /user/ CreateUser
 * @apiName createUser
 * @apiGroup Usuarios 
 * 
 * @apiparam {String} identificacion Numero de Identificacion del usuario.
 * @apiparam {String} nombre Nombre del usuario.
 * @apiparam {String} apellido Apellido del usuario.
 * @apiparam {String} username Username.
 * @apiparam {String} password Password.
 * @apiparam {String} email Email del usuario.
 * @apiparam {String} direccion Direccion del usuario.
 * @apiparam {String} telefono Telefono del usuario.
 * @apiparam {Number} idRol Rol del usuario.
 * 
 * @apiSuccess {Number} id ID único del usuario.
 */
const createUser = async (req, res) => {
    const { body } = req;
    const rta = await models.User.create(body);
    res.json(rta.id);
};

/**
 * @api {put} /user/:id UpdateUserbyId
 * @apiName updateUser
 * @apigroup Usuarios
 * 
 * @apiparam {Numeric} id ID único del usuario.
 * @apiparam {Object} body Información del usuario.
 * 
 * @apisuccess {Object} user Información del usuario.
 */ 
const updateUser = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    //usar save en lugar de update
    const rta = await models.User.update(body, { where: { id } });
    res.json(rta);
};

/**
 * @api {delete} /user/:id DeleteUserbyId
 * @apiName deleteUser
 * @apiGroup Usuarios
 *
 * @apiParam {Number} id ID único del usuario a eliminar.
 *
 * @returns {Object} Objeto de usuario eliminado.
 */
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const rta = await models.User.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
