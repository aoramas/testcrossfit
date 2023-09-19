import { Request, Response } from "express";
import { Wod } from "../models/wod";

/**
 * @api {get} /wod/ GetWods
 * @apiName getWod
 * @apiGroup WODs
 *
 * @apiSuccess {Object[]} wods Lista de WODs.
 */
const getWod = async (req: Request, res: Response) => {
  const rta = await Wod.findAll();
  res.status(200).json(rta);
};

/**
 * @api {get} /wod/:id GetWodById
 * @apiName getWodById
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD.
 *
 * @apiSuccess {Object} wod Información del WOD.
 */
const getWodById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Wod.findOne({ where: { id } });
  res.json(rta);
};

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
const createWod = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await Wod.create(body);
  res.json(rta);
};

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
const updateWod = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await Wod.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /wod/:id DeleteWodById
 * @apiName deleteWod
 * @apiGroup WODs
 *
 * @apiParam {Number} id ID único del WOD a eliminar.
 *
 * @apiSuccess {Object} wod Objeto de WOD eliminado.
 */
const deleteWod = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Wod.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getWod,
  getWodById,
  createWod,
  updateWod,
  deleteWod,
};
