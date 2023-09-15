const { models } = require("../libs/sequelize");

/**
 * @api {get} /administrative/ GetAdministratives
 * @apiName getAdmin
 * @apiGroup Administrativos
 *
 * @apiSuccess {Object[]} users Lista de usuarios.
 */
const getAdmin = async (req, res) => {
  const rta = await models.Administrative.findAll();
  res.json(rta);
};

/**
 * @api {get} /administrative/:id GetAdministrativeById
 * @apiName getAdminById
 * @apiGroup Administrativos
 *
 * @apiParam {Number} id ID único del administrativo.
 *
 * @apiSuccess {Object} Objeto de administrativo.
 */
const getAdminById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Administrative.findByPk(id);
  res.json(rta);
};

/**
 * @api {post} /administrative/ CreateAdministrative
 * @apiName createAdmin
 * @apiGroup Administrativos 
 * 
 * @apiParam {String} identificacion Numero de Identificacion del administrativo.
 * @apiParam {String} nombres Nombre del administrativo.
 * @apiParam {String} apellidos Apellidos del administrativo.
 * @apiParam {String} username Username.
 * @apiParam {String} password Password.
 * @apiParam {String} email Email del administrativo.
 * @apiParam {String} direccion Direccion del administrativo.
 * @apiParam {String} telefono Telefono del administrativo.
 * @apiParam {String} fechaInicio Fecha de inicio del administrativo.
 * @apiParam {Number} estado Estado del administrativo.
 * @apiParam {Number} idRol Rol del administrativo.
 * @apiParam {String} cargo Cargo del administrativo.
 * 
 * @apiSuccess {Number} id ID único del administrativo creado.
 */
const createAdmin = async (req, res) => {
  const { body } = req;
  const bodyUser = {
    identificacion: body.identificacion,
    nombres: body.nombres,
    apellidos: body.apellidos,
    username: body.username,
    password: body.password,
    email: body.email,
    direccion: body.direccion,
    telefono: body.telefono,
    fechaInicio: body.fechaInicio,
    estado: body.estado,
    idRol: body.idRol,
    cargo: body.cargo
  };
  const rtaUser = await models.User.create(bodyUser);
  const bodyAdmin = {
    cargo: body.cargo,
    idUsuario: rtaUser.id,
  };
  console.log(rtaUser);
  const rta = await models.Administrative.create(bodyAdmin);
  res.json(rta.id);
};


/**
 * @api {put} /administrative/:id UpdateAdministrativeById
 * @apiName updateAdmin
 * @apigroup Administrativos
 * 
 * @apiparam {Numeric} id ID único del administrativo.
 * @apiparam {Object} body Información del administrativo.
 * 
 * @apisuccess {Object} administrativo Información del administrativo actualizado.
 */ 
const updateAdmin = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Administrative.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /administrative/:id DeleteAdministrativeById
 * @apiName deleteAdmin
 * @apiGroup Administrativos
 *
 * @apiParam {Number} id ID único del administrativo a eliminar.
 *
 * @apiSuccess {Object} Objeto Administrativo eliminado.
 */
const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Administrative.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getAdmin,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
