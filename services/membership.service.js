const { models } = require("../libs/sequelize");

const getMembership = async (req, res) => {
    const rta = await models.Membership.findAll();
    
    res.status(200).json(rta);
};

const getMembershipById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Membership.findOne({ where: { id } });
    res.json(rta);
};

const createMembership = async (req, res) => {
    const { body } = req;
    const rta = await models.Membership.create(body);
    res.json(rta);
};

const updateMembership = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Membership.update(body, { where: { id } });
    res.json(rta);
};

const deleteMembership = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Membership.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getMembership,
    getMembershipById,
    createMembership,
    updateMembership,
    deleteMembership,
};
