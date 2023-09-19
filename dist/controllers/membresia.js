"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const membresia_1 = require("../models/membresia");
/**
 * @api {get} /membership/ GetMembership
 * @apiName getMembership
 * @apiGroup Membresías
 *
 * @apiSuccess {Object[]} membresias Lista de membresías.
 */
const getMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield membresia_1.Membresia.findAll();
    res.status(200).json(rta);
});
/**
 * @api {get} /membership/:id GetMembershipById
 * @apiName getMembershipById
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía.
 *
 * @apiSuccess {Object} membresia Información de la membresía.
 */
const getMembershipById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield membresia_1.Membresia.findOne({ where: { id } });
    res.json(rta);
});
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
const createMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield membresia_1.Membresia.create(body);
    res.json(rta);
});
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
const updateMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield membresia_1.Membresia.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /membership/:id DeleteMembershipById
 * @apiName deleteMembership
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía a eliminar.
 *
 * @apiSuccess {Object} membresia Objeto de membresía eliminada.
 */
const deleteMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield membresia_1.Membresia.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getMembership,
    getMembershipById,
    createMembership,
    updateMembership,
    deleteMembership,
};
