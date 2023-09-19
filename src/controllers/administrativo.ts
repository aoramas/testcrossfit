import { Request, Response } from "express";
import { Administrativo } from "../models/administrativo";

/**
 * @api {get} /administrative/ GetAdministratives
 * @apiName getAdmin
 * @apiGroup Administrativos
 *
 * @apiSuccess {Object[]} users Lista de usuarios.
 */
const getAdmin = async (req: Request, res: Response) => {
  const rta = await Administrativo.findAll();
  res.json(rta);
};

/**
 * @api {get} /administrative/:id GetAdministrativeById
 * @apiName getAdminById
 * @apiGroup Administrativos
 *
 * @apiParam {Number} id ID único del administrativo.
 *
 * @apiSuccess {Object} Objeto de administrativo.
 */
const getAdminById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Administrativo.findByPk(id);
  res.json(rta);
};

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
const createAdmin = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await Administrativo.create(body);
  res.json(rta);
};

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
const updateAdmin = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await Administrativo.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /administrative/:id DeleteAdministrativeById
 * @apiName deleteAdmin
 * @apiGroup Administrativos
 *
 * @apiParam {Number} id ID único del administrativo a eliminar.
 *
 * @apiSuccess {Object} Objeto Administrativo eliminado.
 */
const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Administrativo.destroy({ where: { id } });
  res.json(rta);
};

exports = {
  getAdmin,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
