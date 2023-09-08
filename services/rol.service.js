
const { models } = require("../libs/sequelize");

const getRol = async (req, res) => {
    const rta = await models.Rol.findAll();
    res.status(200).json(rta);
};

const getRolbyId = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Rol.findOne({ where: { id } });
    res.json(rta);
};

const createRol = async (req, res) => {
    const { body } = req;
    const rta = await models.Rol.create(body);
    res.json(rta);
};

const updateRol = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    //usar save en lugar de update
    const rta = await models.Rol.update(body, { where: { id } });
    res.json(rta);
};

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
