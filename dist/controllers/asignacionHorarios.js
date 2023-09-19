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
const asignacionHorarios_1 = require("../models/asignacionHorarios");
/**
 * @api {get} /asignacion-horarios/ GetAsignacionHorarios
 * @apiName getAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiSuccess {Object[]} asignaciones Lista de asignaciones de horarios.
 */
const getAsignacionHorarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield asignacionHorarios_1.AsignacionHorarios.findAll();
    res.json(rta);
});
/**
 * @api {get} /asignacion-horarios/:id GetAsignacionHorariosById
 * @apiName getAsignacionHorariosById
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario.
 */
const getAsignacionHorariosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield asignacionHorarios_1.AsignacionHorarios.findByPk(id);
    res.json(rta);
});
/**
 * @api {post} /asignacion-horarios/ CreateAsignacionHorarios
 * @apiName createAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} idAdministrativo ID del administrativo asignado.
 * @apiParam {String} fecha Fecha de la asignación (Formato: "YYYY-MM-DD").
 * @apiParam {Number} idHorario ID del horario asignado.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario creada.
 */
const createAsignacionHorarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const asignacionHorarios = yield asignacionHorarios_1.AsignacionHorarios.create(body);
    res.json(asignacionHorarios);
});
/**
 * @api {put} /asignacion-horarios/:id UpdateAsignacionHorarios
 * @apiName updateAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario.
 * @apiParam {Object} body Información de la asignación de horario a actualizar.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario actualizada.
 */
const updateAsignacionHorarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield asignacionHorarios_1.AsignacionHorarios.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /asignacion-horarios/:id DeleteAsignacionHorariosById
 * @apiName deleteAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario a eliminar.
 *
 * @apiSuccess {Object} asignacion Objeto de asignación de horario eliminado.
 */
const deleteAsignacionHorarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield asignacionHorarios_1.AsignacionHorarios.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getAsignacionHorarios,
    getAsignacionHorariosById,
    createAsignacionHorarios,
    updateAsignacionHorarios,
    deleteAsignacionHorarios,
};
