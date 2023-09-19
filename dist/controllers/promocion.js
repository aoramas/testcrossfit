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
const promocion_1 = require("../models/promocion");
/**
 * @api {get} /promotion/ GetPromotions
 * @apiName getPromotion
 * @apiGroup Promociones
 *
 * @apiSuccess {Object[]} promociones Lista de promociones.
 */
const getPromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield promocion_1.Promocion.findAll();
    res.status(200).json(rta);
});
/**
 * @api {get} /promotion/:id GetPromotionById
 * @apiName getPromotionById
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción.
 *
 * @apiSuccess {Object} promocion Información de la promoción.
 */
const getPromotionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield promocion_1.Promocion.findOne({ where: { id } });
    res.json(rta);
});
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
const createPromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield promocion_1.Promocion.create(body);
    res.json(rta);
});
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
const updatePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield promocion_1.Promocion.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /promotion/:id DeletePromotionById
 * @apiName deletePromotion
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción a eliminar.
 *
 * @apiSuccess {Object} promocion Objeto de promoción eliminada.
 */
const deletePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield promocion_1.Promocion.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getPromotion,
    getPromotionById,
    createPromotion,
    updatePromotion,
    deletePromotion,
};
