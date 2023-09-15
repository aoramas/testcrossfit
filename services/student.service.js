const { models } = require("../libs/sequelize");

/**
 * @api {get} /student/ GetStudents
 * @apiName getStudent
 * @apiGroup Estudiantes
 *
 * @apiSuccess {Object[]} students Lista de estudiantes.
 */
const getStudent = async (req, res) => {
  const rta = await models.Student.findAll();
  res.json(rta);
};

/**
 * @api {get} /student/:id GetStudentsById
 * @apiName getStudentById
 * @apiGroup Estudiantes
 *
 * @apiParam {Number} id ID único del estudiante.
 *
 * @apiSuccess {Object} student Información del estudiante.
 */
const getStudentById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Student.findOne({ where: { id } });
  res.json(rta);
};

/**
 * @api {post} /student/ CreateStudent
 * @apiName createStudent
 * @apiGroup Estudiantes
 * 
 * @apiParam {String} identificacion Numero de Identificacion del estudiante.
 * @apiParam {String} nombres Nombre del estudiante.
 * @apiParam {String} apellidos Apellidos del estudiante.
 * @apiParam {String} username Username.
 * @apiParam {String} password Password.
 * @apiParam {String} email Email del estudiante.
 * @apiParam {String} direccion Direccion del estudiante.
 * @apiParam {String} telefono Telefono del estudiante.
 * @apiParam {String} fechaInicio Fecha de inicio del estudiante.
 * @apiParam {Number} estado Estado del estudiante.
 * @apiParam {Number} edad Edad del estudiante.
 * @apiParam {Number} peso Peso del estudiante.
 * @apiParam {Number} estatura Estatura del estudiante.
 * @apiParam {String} genero Género del estudiante.
 * @apiParam {Number} idMembresia ID de membresía del estudiante.
 * @apiParam {String} lesiones Lesiones del estudiante.
 * 
 * @apiSuccess {Number} id ID único del estudiante creado.
 */
const createStudent = async (req, res) => {
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
    idRol: body.idRol
  };
  const rtaUser = await models.User.create(bodyUser);
  const bodyStudent = {
    idUsuario: rtaUser.id,
    edad: body.edad,
    peso: body.peso,
    estatura: body.estatura,
    genero: body.genero,
    idMembresia: body.idMembresia,
    lesiones: body.lesiones,
  };
  console.log(rtaUser);
  const rta = await models.Student.create(bodyStudent);
  res.json(rta.id);
};

/**
 * @api {put} /student/:id UpdateStudentById
 * @apiName updateStudent
 * @apiGroup Estudiantes
 * 
 * @apiParam {Numeric} id ID único del estudiante.
 * @apiParam {Object} body Información del estudiante.
 * 
 * @apiSuccess {Object} student Información del estudiante actualizado.
 */ 
const updateStudent = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Student.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /student/:id DeleteStudentById
 * @apiName deleteStudent
 * @apiGroup Estudiantes
 *
 * @apiParam {Number} id ID único del estudiante a eliminar.
 *
 * @apiSuccess {Object} student Objeto de estudiante eliminado.
 */
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Student.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
