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
const wod_1 = require("../models/wod");
/**
 * @api {get} /wod/ GetWods
 * @apiName getWod
 * @apiGroup WODs
 *
 * @apiSuccess {Object[]} wods Lista de WODs.
 */
const getWod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield wod_1.Wod.findAll();
    res.status(200).json(rta);
});
/**
 * @api {get} /wod/:id GetWodById
 * @apiName getWodById
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD.
 *
 * @apiSuccess {Object} wod Información del WOD.
 */
const getWodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield wod_1.Wod.findOne({ where: { id } });
    res.json(rta);
});
/**
 * @api {post} /wod/ CreateWod
 * @apiName createWod
 * @apiGroup WODs
 *
 * @apiParam {String} name Nombre del WOD.
 * @apiParam {Number} idWodEjercicios ID de los ejercicios asociados al WOD.
 * @apiParam {String} fecha Fecha del WOD.
 *
 * @apiSuccess {Object} wod Información del WOD creado.
 */
const createWod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield wod_1.Wod.create(body);
    res.json(rta);
});
/**
 * @api {put} /wod/:id UpdateWodById
 * @apiName updateWod
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD.
 * @apiParam {Object} body Información del WOD a actualizar.
 *
 * @apiSuccess {Object} wod Información del WOD actualizado.
 */
const updateWod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield wod_1.Wod.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /wod/:id DeleteWodById
 * @apiName deleteWod
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD a eliminar.
 *
 * @apiSuccess {Object} wod Objeto de WOD eliminado.
 */
const deleteWod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield wod_1.Wod.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getWod,
    getWodById,
    createWod,
    updateWod,
    deleteWod,
};
