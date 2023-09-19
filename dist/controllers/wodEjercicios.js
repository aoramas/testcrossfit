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
const wodEjercicios_1 = require("../models/wodEjercicios");
/**
 * @api {get} /wodejercicios/ GetWodEjercicios
 * @apiName getWodEjercicios
 * @apiGroup WodEjercicios
 *
 * @apiSuccess {Object[]} wodejercicios Lista de WodEjercicios.
 */
const getWodEjercicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield wodEjercicios_1.WodEjercicios.findAll();
    res.status(200).json(rta);
});
/**
 * @api {get} /wodejercicios/:id GetWodEjerciciosById
 * @apiName getWodEjerciciosById
 * @apiGroup WodEjercicios
 *
 * @apiParam {Number} id ID único del WodEjercicios.
 *
 * @apiSuccess {Object} wodejercicios Información del WodEjercicios.
 */
const getWodEjerciciosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield wodEjercicios_1.WodEjercicios.findOne({ where: { id } });
    res.json(rta);
});
/**
 * @api {post} /wodejercicios/ CreateWodEjercicios
 * @apiName createWodEjercicios
 * @apiGroup WodEjercicios
 *
 * @apiParam {Number} idEjercicio ID del ejercicio asociado al WodEjercicios.
 * @apiParam {String} fecha Fecha del WodEjercicios.
 * @apiParam {Number} repeticiones Número de repeticiones del WodEjercicios.
 * @apiParam {Number} sets Número de sets del WodEjercicios.
 *
 * @apiSuccess {Object} wodejercicios Información del WodEjercicios creado.
 */
const createWodEjercicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield wodEjercicios_1.WodEjercicios.create(body);
    res.json(rta);
});
/**
 * @api {put} /wodejercicios/:id UpdateWodEjerciciosById
 * @apiName updateWodEjercicios
 * @apiGroup WodEjercicios
 *
 * @apiParam {Number} id ID único del WodEjercicios.
 * @apiParam {Object} body Información del WodEjercicios a actualizar.
 *
 * @apiSuccess {Object} wodejercicios Información del WodEjercicios actualizado.
 */
const updateWodEjercicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield wodEjercicios_1.WodEjercicios.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /wodejercicios/:id DeleteWodEjerciciosById
 * @apiName deleteWodEjercicios
 * @apiGroup WodEjercicios
 *
 * @apiParam {Number} id ID único del WodEjercicios a eliminar.
 *
 * @apiSuccess {Object} wodejercicios Objeto de WodEjercicios eliminado.
 */
const deleteWodEjercicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield wodEjercicios_1.WodEjercicios.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getWodEjercicios,
    getWodEjerciciosById,
    createWodEjercicios,
    updateWodEjercicios,
    deleteWodEjercicios,
};
