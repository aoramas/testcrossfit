const { models } = require("../libs/sequelize");

const getPromotion = async (req, res) => {
    const rta = await models.Promotion.findAll();
    res.status(200).json(rta);
};

const getPromotionById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Promotion.findOne({ where: { id } });
    res.json(rta);
};

const createPromotion = async (req, res) => {
    const { body } = req;
    const rta = await models.Promotion.create(body);
    res.json(rta);
};

const updatePromotion = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Promotion.update(body, { where: { id } });
    res.json(rta);
};

const deletePromotion = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Promotion.destroy({ where: { id } });
    res.json(rta);
};

module.exports = {
    getPromotion,
    getPromotionById,
    createPromotion,
    updatePromotion,
    deletePromotion
};
