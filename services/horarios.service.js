const { models } = require("../libs/sequelize");

const getHorarios = async (req, res) => {
    const rta = await models.User.findAll();
    res.json(rta);
};

const getHorariosById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.User.findOne({ where: { id } });
    res.json(rta);
};

const createHorarios = async (req, res) => {
    const { body } = req;
    const rta = await models.User.create(body);
    res.json(rta);
};

const updateHorarios = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.User.update(body, { where: { id } });
    res.json(rta);
};

const deleteHorarios = async (req, res) => {
    const { id } = req.params;
    const rta = await models.User.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getHorarios,
    getHorariosById,
    createHorarios,
    updateHorarios,
    deleteHorarios,
};