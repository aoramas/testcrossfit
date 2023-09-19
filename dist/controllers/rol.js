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
const rol_1 = require("../models/rol");
/**
 * @api {get} /rol/ GetRols
 * @apiName getRol
 * @apiGroup Roles
 *
 * @apiSuccess {Object[]} roles Lista de roles.
 */
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield rol_1.Rol.findAll();
    res.status(200).json(rta);
});
/**
 * @api {get} /rol/:id GetRolById
 * @apiName getRolbyId
 * @apiGroup Roles
 *
 * @apiParam {Number} id ID único del rol.
 *
 * @apiSuccess {Object} rol Información del rol.
 */
const getRolbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield rol_1.Rol.findOne({ where: { id } });
    res.json(rta);
});
/**
 * @api {post} /rol/ CreateRol
 * @apiName createRol
 * @apiGroup Roles
 *
 * @apiParam {String} nombre Nombre del rol.
 * @apiParam {Number} idPermiso ID del permiso asociado al rol.
 *
 * @apiSuccess {Object} rol Información del rol creado.
 */
const createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield rol_1.Rol.create(body);
    res.json(rta);
});
/**
 * @api {put} /rol/:id UpdateRolById
 * @apiName updateRol
 * @apiGroup Roles
 *
 * @apiParam {Number} id ID único del rol.
 * @apiParam {Object} body Información del rol a actualizar.
 *
 * @apiSuccess {Object} rol Información del rol actualizado.
 */
const updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield rol_1.Rol.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /rol/:id DeleteRolById
 * @apiName deleteRol
 * @apiGroup Roles
 *
 * @apiParam {Number} id ID único del rol a eliminar.
 *
 * @apiSuccess {Object} rol Objeto de rol eliminado.
 */
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield rol_1.Rol.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getRol,
    getRolbyId,
    createRol,
    updateRol,
    deleteRol,
};
