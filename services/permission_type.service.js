const { models } = require("../libs/sequelize");

const getPermission = async (req, res) => {
    const rta = await models.PermissionType.findAll();
    res.status(200).json(rta);
};

const getPermissionById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.PermissionType.findOne({ where: { id } });
    res.json(rta);
};

const createPermission = async (req, res) => {
    const { body } = req;
    const rta = await models.PermissionType.create(body);
    res.json(rta);
};

const updatePermission = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    //usar save en lugar de update
    const rta = await models.PermissionType.update(body, { where: { id } });
    res.json(rta);
};

const deletePermission = async (req, res) => {
    const { id } = req.params;
    const rta = await models.PermissionType.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getPermission,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
};
