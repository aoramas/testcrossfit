const { models } = require("../libs/sequelize");

/**
 * @api {get} /promotion/ GetPromotions
 * @apiName getPromotion
 * @apiGroup Promociones
 *
 * @apiSuccess {Object[]} promociones Lista de promociones.
 */
const getPromotion = async (req, res) => {
    const rta = await models.Promotion.findAll();
    res.status(200).json(rta);
};

/**
 * @api {get} /promotion/:id GetPromotionById
 * @apiName getPromotionById
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción.
 *
 * @apiSuccess {Object} promocion Información de la promoción.
 */
const getPromotionById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Promotion.findOne({ where: { id } });
    res.json(rta);
};

/**
 * @api {post} /promotion/ CreatePromotion
 * @apiName createPromotion
 * @apiGroup Promociones
 * 
 * @apiParam {String} nombre Nombre de la promoción.
 * @apiParam {Number} descuento Descuento de la promoción.
 * 
 * @apiSuccess {Object} promocion Información de la promoción creada.
 */
const createPromotion = async (req, res) => {
    const { body } = req;
    const rta = await models.Promotion.create(body);
    res.json(rta);
};

/**
 * @api {put} /promotion/:id UpdatePromotionById
 * @apiName updatePromotion
 * @apiGroup Promociones
 * 
 * @apiParam {Number} id ID único de la promoción.
 * @apiParam {Object} body Información de la promoción a actualizar.
 * 
 * @apiSuccess {Object} promocion Información de la promoción actualizada.
 */ 
const updatePromotion = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Promotion.update(body, { where: { id } });
    res.json(rta);
};

/**
 * @api {delete} /promotion/:id DeletePromotionById
 * @apiName deletePromotion
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción a eliminar.
 *
 * @apiSuccess {Object} promocion Objeto de promoción eliminada.
 */
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
