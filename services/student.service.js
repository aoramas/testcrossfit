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
    const rta = await models.Student.create(body);
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