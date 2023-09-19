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
const tipoPermiso_1 = require("../models/tipoPermiso");
/**
 * @api {get} /permissiontype/ GetPermission
 * @apiName getPermission
 * @apiGroup Tipos de Permisos
 *
 * @apiSuccess {Object[]} tiposPermisos Lista de tipos de permisos.
 */
const getPermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield tipoPermiso_1.TipoPermiso.findAll();
    res.status(200).json(rta);
});
/**
 * @api {get} /permissiontype/:id GetPermissionById
 * @apiName getPermissionById
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso.
 *
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso.
 */
const getPermissionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield tipoPermiso_1.TipoPermiso.findOne({ where: { id } });
    res.json(rta);
});
/**
 * @api {post} /permissiontype/ CreatePermission
 * @apiName createPermission
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {String} nombrePermiso Nombre del permiso.
 * @apiParam {String} nemonico Nemonico del permiso.
 *
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso creado.
 */
const createPermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield tipoPermiso_1.TipoPermiso.create(body);
    res.json(rta);
});
/**
 * @api {put} /permissiontype/:id UpdatePermissionById
 * @apiName updatePermission
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso.
 * @apiParam {Object} body Información del tipo de permiso a actualizar.
 *
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso actualizado.
 */
const updatePermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const rta = yield tipoPermiso_1.TipoPermiso.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /permissiontype/:id DeletePermissionById
 * @apiName deletePermission
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso a eliminar.
 *
 * @apiSuccess {Object} tipoPermiso Objeto de tipo de permiso eliminado.
 */
const deletePermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield tipoPermiso_1.TipoPermiso.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getPermission,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
};
