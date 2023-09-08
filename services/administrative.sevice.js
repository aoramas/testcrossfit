const { models } = require("../libs/sequelize");

const getAdmin = async (req, res) => {
  const rta = await models.Administrative.findAll();
  res.json(rta);
};

const getAdminById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Administrative.findByPk(id);
  res.json(rta);
};

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
  };
  const rtaUser = await models.User.create(bodyUser);
  const bodyAdmin = {
    cargo: body.cargo,
    idUsuario: rtaUser.id,
  };
  console.log(rtaUser);
  const rta = await models.Administrative.create(bodyAdmin);
  res.json(rta);
};

const updateAdmin = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Administrative.update(body, { where: { id } });
  res.json(rta);
};

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
