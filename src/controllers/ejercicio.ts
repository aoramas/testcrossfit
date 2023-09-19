import { Request, Response } from "express";
import { Ejercicio } from "../models/ejercicio";

/**
 * @api {get} /exercises/ GetExercises
 * @apiName getExercises
 * @apiGroup Ejercicios
 *
 * @apiSuccess {Object[]} exercises Lista de ejercicios.
 */
const getExercises = async (req: Request, res: Response) => {
  const rta = await Ejercicio.findAll();
  res.json(rta);
};

/**
 * @api {get} /exercises/:id GetExercisesById
 * @apiName getExercisesById
 * @apiGroup Ejercicios
 *
 * @apiParam {Number} id ID único del ejercicio.
 *
 * @apiSuccess {Object} exercise Información del ejercicio.
 */
const getExercisesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Ejercicio.findOne({ where: { id } });
  res.json(rta);
};

/**
 * @api {post} /exercises/ CreateExercises
 * @apiName createExercises
 * @apiGroup Ejercicios
 *
 * @apiParam {String} nombre Nombre del ejercicio.
 *
 * @apiSuccess {Object} exercise Información del ejercicio creado.
 */
const createExercises = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await Ejercicio.create(body);
  res.json(rta);
};

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
const updateExercises = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await Ejercicio.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /exercises/:id DeleteExercisesById
 * @apiName deleteExercises
 * @apiGroup Ejercicios
 *
 * @apiParam {Number} id ID único del ejercicio a eliminar.
 *
 * @apiSuccess {Object} exercise Objeto de ejercicio eliminado.
 */
const deleteExercises = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Ejercicio.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getExercises,
  getExercisesById,
  createExercises,
  updateExercises,
  deleteExercises,
};
