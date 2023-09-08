const { models } = require("../libs/sequelize");

const getStudent = async (req, res) => {
    const rta = await models.Student.findAll();
    res.json(rta);
};

const getStudentById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Student.findOne({ where: { id } });
    res.json(rta);
};

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
      idRol: 1,
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
    const rta = await models.Student.create(bodyStudent);
    res.json(rta);
  };

const updateStudent = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Student.update(body, { where: { id } });
    res.json(rta);
};

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