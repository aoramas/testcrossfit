const { models } = require("../libs/sequelize");

const getUser = async (req, res) => {
    const rta = await models.User.findAll();
    res.json(rta);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.User.findOne({ where: { id } });
    res.json(rta);
};

const createUser = async (req, res) => {
    const { body } = req;
    const rta = await models.User.create(body);
    res.json(rta);
};

const updateUser = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.User.update(body, { where: { id } });
    res.json(rta);
};

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
