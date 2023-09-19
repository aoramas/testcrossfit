import { Request, Response } from "express";
import { TipoPermiso } from "../models/tipoPermiso";
/**
 * @api {get} /permissiontype/ GetPermission
 * @apiName getPermission
 * @apiGroup Tipos de Permisos
 *
 * @apiSuccess {Object[]} tiposPermisos Lista de tipos de permisos.
 */
const getPermission = async (req: Request, res: Response) => {
  const rta = await TipoPermiso.findAll();
  res.status(200).json(rta);
};

/**
 * @api {get} /permissiontype/:id GetPermissionById
 * @apiName getPermissionById
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso.
 *
 * @apiSuccess {Object} tipoPermiso Información del tipo de permiso.
 */
const getPermissionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await TipoPermiso.findOne({ where: { id } });
  res.json(rta);
};

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
const createPermission = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await TipoPermiso.create(body);
  res.json(rta);
};

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
const updatePermission = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const rta = await TipoPermiso.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /permissiontype/:id DeletePermissionById
 * @apiName deletePermission
 * @apiGroup Tipos de Permisos
 *
 * @apiParam {Number} id ID único del tipo de permiso a eliminar.
 *
 * @apiSuccess {Object} tipoPermiso Objeto de tipo de permiso eliminado.
 */
const deletePermission = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await TipoPermiso.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getPermission,
  getPermissionById,
  createPermission,
  updatePermission,
  deletePermission,
};
