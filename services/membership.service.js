const { models } = require("../libs/sequelize");

/**
 * @api {get} /membership/ GetMembership
 * @apiName getMembership
 * @apiGroup Membresías
 *
 * @apiSuccess {Object[]} membresias Lista de membresías.
 */
const getMembership = async (req, res) => {
    const rta = await models.Membership.findAll();
    res.status(200).json(rta);
};

/**
 * @api {get} /membership/:id GetMembershipById
 * @apiName getMembershipById
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía.
 *
 * @apiSuccess {Object} membresia Información de la membresía.
 */
const getMembershipById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Membership.findOne({ where: { id } });
    res.json(rta);
};

/**
 * @api {post} /membership/ CreateMembership
 * @apiName createMembership
 * @apiGroup Membresías
 * 
 * @apiParam {Number} idPromocion ID de la promoción relacionada a la membresía.
 * @apiParam {Number} precio Precio de la membresía.
 * @apiParam {Boolean} activa Estado de la membresía (true si está activa, false si no lo está).
 * @apiParam {String} fechaVencimiento Fecha de vencimiento de la membresía.
 * 
 * @apiSuccess {Object} membresia Información de la membresía creada.
 */
const createMembership = async (req, res) => {
    const { body } = req;
    const rta = await models.Membership.create(body);
    res.json(rta);
};

/**
 * @api {put} /membership/:id UpdateMembershipById
 * @apiName updateMembership
 * @apiGroup Membresías
 * 
 * @apiParam {Number} id ID único de la membresía.
 * @apiParam {Object} body Información de la membresía a actualizar.
 * 
 * @apiSuccess {Object} membresia Información de la membresía actualizada.
 */ 
const updateMembership = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Membership.update(body, { where: { id } });
    res.json(rta);
};

/**
 * @api {delete} /membership/:id DeleteMembershipById
 * @apiName deleteMembership
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía a eliminar.
 *
 * @apiSuccess {Object} membresia Objeto de membresía eliminada.
 */
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
