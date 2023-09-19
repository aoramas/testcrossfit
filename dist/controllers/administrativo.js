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
const administrativo_1 = require("../models/administrativo");
/**
 * @api {get} /administrative/ GetAdministratives
 * @apiName getAdmin
 * @apiGroup Administrativos
 *
 * @apiSuccess {Object[]} users Lista de usuarios.
 */
const getAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield administrativo_1.Administrativo.findAll();
    res.json(rta);
});
/**
 * @api {get} /administrative/:id GetAdministrativeById
 * @apiName getAdminById
 * @apiGroup Administrativos
 *
 * @apiParam {Number} id ID único del administrativo.
 *
 * @apiSuccess {Object} Objeto de administrativo.
 */
const getAdminById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield administrativo_1.Administrativo.findByPk(id);
    res.json(rta);
});
/**
 * @api {post} /administrative/ CreateAdministrative
 * @apiName createAdmin
 * @apiGroup Administrativos
 *
 * @apiParam {String} identificacion Numero de Identificacion del administrativo.
 * @apiParam {String} nombres Nombre del administrativo.
 * @apiParam {String} apellidos Apellidos del administrativo.
 * @apiParam {String} username Username.
 * @apiParam {String} password Password.
 * @apiParam {String} email Email del administrativo.
 * @apiParam {String} direccion Direccion del administrativo.
 * @apiParam {String} telefono Telefono del administrativo.
 * @apiParam {String} fechaInicio Fecha de inicio del administrativo.
 * @apiParam {Number} estado Estado del administrativo.
 * @apiParam {Number} idRol Rol del administrativo.
 * @apiParam {String} cargo Cargo del administrativo.
 *
 * @apiSuccess {Number} id ID único del administrativo creado.
 */
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield administrativo_1.Administrativo.create(body);
    res.json(rta);
});
/**
 * @api {put} /administrative/:id UpdateAdministrativeById
 * @apiName updateAdmin
 * @apigroup Administrativos
 *
 * @apiparam {Numeric} id ID único del administrativo.
 * @apiparam {Object} body Información del administrativo.
 *
 * @apisuccess {Object} administrativo Información del administrativo actualizado.
 */
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield administrativo_1.Administrativo.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /administrative/:id DeleteAdministrativeById
 * @apiName deleteAdmin
 * @apiGroup Administrativos
 *
 * @apiParam {Number} id ID único del administrativo a eliminar.
 *
 * @apiSuccess {Object} Objeto Administrativo eliminado.
 */
const deleteAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield administrativo_1.Administrativo.destroy({ where: { id } });
    res.json(rta);
});
exports = {
    getAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
};
