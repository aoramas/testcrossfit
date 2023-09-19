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
const ejercicio_1 = require("../models/ejercicio");
/**
 * @api {get} /exercises/ GetExercises
 * @apiName getExercises
 * @apiGroup Ejercicios
 *
 * @apiSuccess {Object[]} exercises Lista de ejercicios.
 */
const getExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield ejercicio_1.Ejercicio.findAll();
    res.json(rta);
});
/**
 * @api {get} /exercises/:id GetExercisesById
 * @apiName getExercisesById
 * @apiGroup Ejercicios
 *
 * @apiParam {Number} id ID único del ejercicio.
 *
 * @apiSuccess {Object} exercise Información del ejercicio.
 */
const getExercisesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield ejercicio_1.Ejercicio.findOne({ where: { id } });
    res.json(rta);
});
/**
 * @api {post} /exercises/ CreateExercises
 * @apiName createExercises
 * @apiGroup Ejercicios
 *
 * @apiParam {String} nombre Nombre del ejercicio.
 *
 * @apiSuccess {Object} exercise Información del ejercicio creado.
 */
const createExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield ejercicio_1.Ejercicio.create(body);
    res.json(rta);
});
/**
 * @api {put} /exercises/:id UpdateExercisesById
 * @apiName updateExercises
 * @apiGroup Ejercicios
 *
 * @apiParam {Number} id ID único del ejercicio.
 * @apiParam {Object} body Información del ejercicio a actualizar.
 *
 * @apiSuccess {Object} exercise Información del ejercicio actualizado.
 */
const updateExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield ejercicio_1.Ejercicio.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /exercises/:id DeleteExercisesById
 * @apiName deleteExercises
 * @apiGroup Ejercicios
 *
 * @apiParam {Number} id ID único del ejercicio a eliminar.
 *
 * @apiSuccess {Object} exercise Objeto de ejercicio eliminado.
 */
const deleteExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield ejercicio_1.Ejercicio.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getExercises,
    getExercisesById,
    createExercises,
    updateExercises,
    deleteExercises,
};
