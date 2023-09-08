const { models } = require("../libs/sequelize");

const getHorarios = async (req, res) => {
    const rta = await models.Horario.findAll();
    res.json(rta);
};

const getHorariosById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Horario.findOne({ where: { id } });
    res.json(rta);
};

const createHorarios = async (req, res) => {
    const { body } = req;
    const rta = await models.Horario.create(body);
    res.json(rta);
};

const updateHorarios = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Horario.update(body, { where: { id } });
    res.json(rta);
};

const deleteHorarios = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Horario.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getHorarios,
    getHorariosById,
    createHorarios,
    updateHorarios,
    deleteHorarios,
};