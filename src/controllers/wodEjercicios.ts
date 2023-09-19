import { Request, Response } from "express";
import { WodEjercicios } from "../models/wodEjercicios";

/**
 * @api {get} /wodejercicios/ GetWodEjercicios
 * @apiName getWodEjercicios
 * @apiGroup WodEjercicios
 *
 * @apiSuccess {Object[]} wodejercicios Lista de WodEjercicios.
 */
const getWodEjercicios = async (req: Request, res: Response) => {
  const rta = await WodEjercicios.findAll();
  res.status(200).json(rta);
};

/**
 * @api {get} /wodejercicios/:id GetWodEjerciciosById
 * @apiName getWodEjerciciosById
 * @apiGroup WodEjercicios
 *
 * @apiParam {Number} id ID único del WodEjercicios.
 *
 * @apiSuccess {Object} wodejercicios Información del WodEjercicios.
 */
const getWodEjerciciosById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await WodEjercicios.findOne({ where: { id } });
  res.json(rta);
};

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
const createWodEjercicios = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await WodEjercicios.create(body);
  res.json(rta);
};

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
const updateWodEjercicios = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await WodEjercicios.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /wodejercicios/:id DeleteWodEjerciciosById
 * @apiName deleteWodEjercicios
 * @apiGroup WodEjercicios
 *
 * @apiParam {Number} id ID único del WodEjercicios a eliminar.
 *
 * @apiSuccess {Object} wodejercicios Objeto de WodEjercicios eliminado.
 */
const deleteWodEjercicios = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await WodEjercicios.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getWodEjercicios,
  getWodEjerciciosById,
  createWodEjercicios,
  updateWodEjercicios,
  deleteWodEjercicios,
};
